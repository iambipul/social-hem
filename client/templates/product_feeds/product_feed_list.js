Template.productFeedList.helpers({
  productFeeds: function() {
    var feeds = [];
    var product_ids = {};
    var saved_product_ids = {};
    var collection = [];
    var url = document.URL.split('/');
    var product_category = url[url.length - 1];
    if(product_category == 'All'){
      collection =  ProductFeeds.find({}, {sort: {createdAt: -1},  limit: Session.get("feedLimit")});
    }else{
      collection = ProductFeeds.find({product_category: product_category}, {sort: {createdAt: -1},  limit: Session.get("feedLimit")});
    }

    collection.forEach(function(feed){
      var all_feed_count = 0;
      if (feed['saved_product_id']){
        if(saved_product_ids[feed['saved_product_id']]) return;
        all_feed_count =  ProductFeeds.find({saved_product_id: feed.saved_product_id,feed_type: "order"}).count();
        feed.product_url = '/' + feed.tool_type + '/' + feed.saved_product_id;
        saved_product_ids[feed['saved_product_id']] = true;
      }else{
        if(product_ids[feed['product_id']]) return;
        all_feed_count =  ProductFeeds.find({product_id: feed.product_id,feed_type: "order"}).count();
        feed.product_url = '/product/' + feed.product_id;
        product_ids[feed['product_id']] = true;
      }
      feed.name = feed.name["en-gb"];
      if(all_feed_count > 1){
        feed.users = (all_feed_count - 1) + " more people also bought this"
      }
      feeds.push(feed);
    });
  return feeds;
  },

  pagePref: function() {
    return {
      locale_name: 'en-gb',
      region_pref: 2
    }
  },

  moreResults: function(){
    return !(ProductFeeds.find().count() < Session.get("feedLimit"));
  }
});


function showMoreVisible() {
  var threshold, target = $("#showMoreResults");
  if (!target.length) return;

  threshold = $(window).scrollTop() + $(window).height() - target.height();
//  console.log(threshold + "--" + target.offset().top + '')
  if (target.offset().top <= threshold) {
    if (!target.data("visible")) {
//      console.log("target became visible (inside viewable area)");
      target.data("visible", true);
      Session.set("feedLimit",
          Session.get("feedLimit") + ITEMS_INCREMENT);
    }
  } else {
    if (target.data("visible")) {
//      console.log("target became invisible (below viewable arae)");
      target.data("visible", false);
    }
  }
}


$(window).scroll(showMoreVisible);
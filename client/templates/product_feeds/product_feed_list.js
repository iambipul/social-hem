Template.productFeedList.helpers({
  productFeeds: function() {
    var feeds = [];
    var product_ids = {};
    var saved_product_ids = {};
    var collection = [];
    var url = document.URL.split('/');
    var product_category = url[url.length - 1];
    if(product_category == 'All'){
      collection =  ProductFeeds.find();
    }else{
      collection = ProductFeeds.find({product_category: product_category});
    }

    collection.forEach(function(feed){
      var all_feed_count = 0;
      if (feed['saved_product_id']){
        if(saved_product_ids[feed['saved_product_id']]) return;
        all_feed_count =  ProductFeeds.find({saved_product_id: feed.saved_product_id,feed_type: "order"}).count();
        saved_product_ids[feed['saved_product_id']] = true;
      }else{
        if(product_ids[feed['product_id']]) return;
        all_feed_count =  ProductFeeds.find({product_id: feed.product_id,feed_type: "order"}).count();
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
    };
  }
});

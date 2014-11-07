Template.productFeedList.helpers({
  productFeeds: function() {
    var feeds = [];
    ProductFeeds.find().forEach(function(feed){
      feed.users = 'Bipul, Shekhar, Nishith and 10 more people bought this';
      feed.name = feed.name["en-gb"];
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



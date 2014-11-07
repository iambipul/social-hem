Template.productFeedList.helpers({ productFeeds: function() {
    var feeds = [];
    var i = 0;
    ProductFeeds.find().forEach(function(feed){
      feed.first_in_a_row = i == 0;
      feeds.push(feed);
      i+=1;
      if(i%3 ==0){
        i = 0
      }

    });
  return feeds;
  }
});
Meteor.publish('product_feeds', function() {
  return ProductFeeds.find().sort({createdAt:-1}).limit(200);
});

Meteor.startup(function () {
  collectionApi = new CollectionAPI({ authToken: '95b68aaa4c6c853364a4de00c0608c2118a6af52d8a1ba78313ffaf3b92d8ffe6a109759587e512b230d88f5e340700c67a59925c00a69204cf9986e8a03e45c' });
  collectionApi.addCollection(ProductFeeds, 'product_feeds');
  collectionApi.start();
});
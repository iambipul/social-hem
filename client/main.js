//Meteor.subscribe('productFeeds');
//
////@Pages = new Meteor.Pagination(ProductFeeds, ),

ITEMS_INCREMENT = 3;
Session.setDefault('feedLimit', ITEMS_INCREMENT);
Deps.autorun(function() {
  Meteor.subscribe('productFeeds');//, Session.get('feedLimit'));
});
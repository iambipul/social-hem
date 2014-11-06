Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('product_feeds'); }
});

//Router.route('/posts/:_id', {
//  name: 'postPage'
//});
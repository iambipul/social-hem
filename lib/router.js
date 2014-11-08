Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/feed/:_product_category', {
  name: 'productFeedList'
});
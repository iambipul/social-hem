Template.feedFilter.helpers({
  productCategories: function() {
    return ['All', 'Furniture', 'Lighting'];
  },

  currentCategory: function(){
    var url = document.URL.split('/');
    return url[url.length - 1];
  },

  pagePref: function() {
    return {
      locale_name: 'en-gb',
      region_pref: 2
    };
  }
});


Template.feedFilter.events = {
  'click .dropdown .title' : function(e){
    $(e.currentTarget).parent().toggleClass("closed");
    e.preventDefault();
  },

  'click .dropdown li' : function(e){
    e.preventDefault();
    currentTarget = $(e.currentTarget)
    currentTarget.parent().parent().toggleClass("closed").find(".title").text(currentTarget.text());
    window.location.replace('/feed/'+ currentTarget.text());
  }
};
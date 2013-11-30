YeoEmber.StoryRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('story', params.story_id);
  }
});


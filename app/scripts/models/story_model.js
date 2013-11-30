/*global Ember*/
YeoEmber.Story = DS.Model.extend({
  url : DS.attr('string'),
  tags : DS.attr('string'),
  fullname : DS.attr('string'),
  title : DS.attr('string'),
  exerpt : DS.attr('string'),
  submittedON : DS.attr('string')
});

// probably should be mixed-in...
YeoEmber.Story.reopen({
  // certainly I'm duplicating something that exists elsewhere...
  attributes: function(){
    var attrs = [];
    var model = this;
    Ember.$.each(Ember.A(Ember.keys(this.get('data'))), function(idx, key){
      var pair = { key: key, value: model.get(key) };
      attrs.push(pair);
    });
    return attrs;
  }.property()
});

// delete below here if you do not want fixtures
YeoEmber.Story.FIXTURES = [
  
  {
    id: 0,
    
  },
  
  {
    id: 1,
    
  }
  
];

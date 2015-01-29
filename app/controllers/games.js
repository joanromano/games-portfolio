import Ember from "ember";

export default Ember.ArrayController.extend({
  itemController: 'game',

  content: function() {
    return this.get('store').find('game');
  }.property()
});
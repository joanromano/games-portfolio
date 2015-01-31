import Ember from "ember";

export default Ember.ObjectController.extend({
  needs: ['games'],
  filterText: '',
  hasBoosters: false,

  model: Ember.computed.alias('controllers.games.favorites'),
  visibleGames: Ember.computed.filterBy('model', 'isVisible', true)
});
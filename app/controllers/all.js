import Ember from "ember";

export default Ember.ObjectController.extend({
  needs: ['games'],
  filterText: '',
  hasBoosters: false,

  model: Ember.computed.filterBy('controllers.games', 'isFavorite', false),
  visibleGames: Ember.computed.filterBy('model', 'isVisible', true)
});
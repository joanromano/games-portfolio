import Ember from "ember";

export default Ember.ObjectController.extend({
  needs: ['games'],
  filterText: '',
  hasBoosters: false,

  games: Ember.computed.alias('controllers.games'),
  favoriteGames: Ember.computed.filterBy('games', 'isFavorite'),
  visibleGames: Ember.computed.filterBy('games', 'isVisible', true)
});
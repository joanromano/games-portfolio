import Ember from "ember";

export default Ember.ObjectController.extend({
  needs: ['games'],

  games: Ember.computed.alias('controllers.games'),
  favoriteGames: Ember.computed.filterBy('games', 'isFavorite')
});
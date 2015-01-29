import Ember from "ember";

export default Ember.ObjectController.extend({
  needs: ['games'],
  games: Ember.computed.alias('controller.games'),
  favoriteGames: Ember.computed.filterBy('games', 'isFavorite')
});
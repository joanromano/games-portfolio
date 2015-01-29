import Ember from "ember";

export default Ember.ArrayController.extend({
  itemController: 'game',

  content: function() {
    return this.get('store').find('game');
  }.property(),

  actions: {
    addToFavorites: function(game) {
      game.set('isFavorite', true);
    },

    removeFavorite: function(game) {
      game.set('isFavorite', false);
    }
  }
});
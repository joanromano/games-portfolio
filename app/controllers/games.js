import Ember from "ember";

/**
 * Manages games, they offer a collection for favorite and non favorite games
 */
export default Ember.ArrayController.extend({
  itemController: 'game',

  favorites: Ember.computed.filterBy('@this', 'isFavorite'),

  model: function() {
    return this.get('store').all('game');
  }.property(),

  actions: {
    toggleFavorite: function(game) {
      game.toggleProperty('isFavorite');
    }
  }
});
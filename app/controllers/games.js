import Ember from "ember";

/**
 * TODO: Document
 * @param  {[type]} )        {               return          this.get('store').all('game');    }.property() [description]
 * @param  {[type]} actions: {               toggleFavorite: function(game)                 {                                game.toggleProperty('isFavorite');    }  }} [description]
 * @return {[type]}          [description]
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
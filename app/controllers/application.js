import Ember from "ember";

/**
 * TODO: Document
 * @type {Array}
 */
export default Ember.ObjectController.extend({
  needs: ['all', 'favorites'],

  allGames: Ember.computed.alias('controllers.all.visibleGames'),
  favoriteGames: Ember.computed.alias('controllers.favorites.visibleGames')
});
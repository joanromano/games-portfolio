import Ember from "ember";

/**
 * Implements common behavior for the gameController; it's used by AllController and FavoritesController
 */
export default Ember.Mixin.create({
  needs: ['games'],
  filterText: '',
  hasBoosters: false,
  isSortAscending: true,

  sortedGames: Ember.computed.sort('model', 'gamesSorting'),
  visibleGames: Ember.computed.filterBy('sortedGames', 'isVisible', true),

  gamesSorting: function() {
    var direcction = this.get('isSortAscending') ? 'asc' : 'desc';
    return ['name:' + direcction];
  }.property('isSortAscending')
});
import Ember from "ember";

export default Ember.ObjectController.extend({
  needs: ['all', 'favorites'],

  all: Ember.computed.alias('controllers.all'),
  favorites: Ember.computed.alias('controllers.favorites'),
  isVisible: Ember.computed.and('matchTextFilter'),

  matchTextFilter: function() {
    var filterText = this.get('isFavorite') ? this.get('favorites.filterText') : this.get('all.filterText');
    var name = this.get('name').toLowerCase();
    var filter = filterText.toLowerCase();

    return name.indexOf(filter) !== -1;
  }.property('name', 'favorites.filterText', 'all.filterText')
});
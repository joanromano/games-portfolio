import Ember from "ember";

export default Ember.ObjectController.extend({
  needs: ['all', 'favorites'],

  all: Ember.computed.alias('controllers.all'),
  favorites: Ember.computed.alias('controllers.favorites'),
  isVisible: Ember.computed.and('matchTextFilter'),

  filterText: function() {
    return this.get('isFavorite') ? this.get('favorites.filterText') : this.get('all.filterText');
  }.property('favorites.filterText', 'all.filterText'),

  matchTextFilter: function() {
    var filterText = this.get('filterText');
    var name = this.get('name').toLowerCase();
    var filter = filterText.toLowerCase();

    return name.indexOf(filter) !== -1;
  }.property('name', 'filterText'),

  displayedName: function() {
    var filterText = this.get('filterText');
    var name = this.get('name');
    if (!filterText) {
      return name;
    }

    return name.replace(new RegExp("(" + filterText + ")", 'gi'), '<span class="matched-text">' + filterText + '</span>');
  }.property('name', 'filterText'),

  actions: {
    toggleFavorite: function() {
      this.toggleProperty('isFavorite');
    }
  }
});
import Ember from "ember";

export default Ember.ObjectController.extend({
  needs: ['portfolio'],
  filterText: Ember.computed.alias('controllers.portfolio.filterText'),
  isVisible: Ember.computed.and('matchTextFilter'),

  matchTextFilter: function() {
    var name = this.get('name').toLowerCase();
    var filter = this.get('filterText').toLowerCase();

    return name.indexOf(filter) !== -1;
  }.property('name', 'filterText')
});
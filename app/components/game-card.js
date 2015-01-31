import Ember from "ember";

export default Ember.Component.extend({
  classNames: ['game-card-component'],
  classNameBindings: ['content.isVisible'],
  content: null,

  actions: {
    toggleFavorite: function() {
      this.toggleProperty('content.isFavorite');
    }
  }
});
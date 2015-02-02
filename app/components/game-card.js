import Ember from "ember";

/**
 * Component in charge of represent each game card (used in "/all" and "/favorites").
 *
 * The components works as isolated pieces of code that you can reuse in other apps,
 * they onl receive an input and return an output.
 */
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
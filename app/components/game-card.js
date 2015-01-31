import Ember from "ember";

/**
 * TODO: Finish docs
 * COMPONENTS:They only receive a input and return a output
 * @param  {[type]} ) {                 this.toggleProperty('content.isFavorite');    }  }} [description]
 * @return {[type]}   [description]
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
import Ember from "ember";

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Ember.View.extend({
  elementId: "game",
  classNameBindings: ['currentBackground'],
  availableBackgrounds: 6,

  currentBackground: function() {
    return 'bg-' + randomNum(1, this.get('availableBackgrounds'));
  }.property('availableBackgrounds')
});
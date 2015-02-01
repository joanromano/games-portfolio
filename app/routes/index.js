import Ember from "ember";

export default Ember.Route.extend({
  //TODO: Document
  redirect: function() {
    this.transitionTo('all');
  }
});
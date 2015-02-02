import Ember from "ember";

export default Ember.Route.extend({
  //We don't want to allow the user to navigate to "/"
  redirect: function() {
    this.transitionTo('all');
  }
});
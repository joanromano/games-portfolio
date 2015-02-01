import Ember from "ember";

export default Ember.Route.extend({
  //TODO: Document
  model: function(params) {
    return this.get('store').find('game', params.game_id);
  }
});
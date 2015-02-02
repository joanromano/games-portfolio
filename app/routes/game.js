import Ember from "ember";

export default Ember.Route.extend({
  //Return the game model from the store depending o the passed "id"
  model: function(params) {
    return this.get('store').find('game', params.game_id);
  }
});
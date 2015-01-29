import DS from "ember-data";

export default DS.RESTSerializer.extend({
  extract: function(store, type, payload) {
    var id = 0;

    return payload.games.map(function(game) {
      id++;
      game.id = id;
      return game;
    });
  }
});
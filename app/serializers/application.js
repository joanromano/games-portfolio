import DS from "ember-data";

/**
 * It's used to serialize and deserialize records when they are transferred in and out of an external source
 */
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
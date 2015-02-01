import DS from "ember-data";

/**
 * TODO: Document
 * @param  {[type]} store    [description]
 * @param  {[type]} type     [description]
 * @param  {[type]} payload) {               var id [description]
 * @return {[type]}          [description]
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
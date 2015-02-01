import Ember from "ember";
import gameList from "../mixins/game-list";

/**
 * TODO: Document
 * @type {[type]}
 */
export default Ember.ObjectController.extend(gameList, {
  model: Ember.computed.alias('controllers.games.favorites')
});
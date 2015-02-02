import Ember from "ember";
import gameList from "../mixins/game-list";

/**
 * Manages the favorite games
 */
export default Ember.ObjectController.extend(gameList, {
  model: Ember.computed.alias('controllers.games.favorites')
});
import Ember from "ember";
import gameList from "../mixins/game-list";

export default Ember.ObjectController.extend(gameList, {
  model: Ember.computed.filterBy('controllers.games', 'isFavorite', false)
});
import Games from "../games-fixtures";
import Ember from "ember";
import config from '../config/environment';

//Inject games data into the store (only used in local environment)
function injectFixtures(store) {
  var id = 0;

  Games = Games.map(function(game) {
    id++;
    game.id = id;
    return game;
  });

  store.pushPayload('game', {games: Games});
}

/**
 * It's the first route called of the App
 */
export default Ember.Route.extend({
  //Load dependencies before the app starts
  beforeModel: function() {
    var store = this.get('store');
    if (config.environment === 'local') {
      injectFixtures(store);
      return;
    }

    return store.find('game');
  },

  actions: {
    historyBack: function() {
      var history = window.history;
      //In case of history api it's not supported (IE)
      if (!history) {
        this.transitionTo('all');
        return;
      }

      history.back();
    }
  }
});
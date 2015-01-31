import Ember from "ember";

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('store').find('game');
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
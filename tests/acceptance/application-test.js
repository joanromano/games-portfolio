import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;
var totalGames = 119;

module('An Integration test', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test("Show all games", function() {
  expect(1);
  visit('/all').then(function() {
    equal(find('.game-card-component.is-visible').length, totalGames, "The List should contains all games");
  });
});

test("Show favorite games", function() {
  expect(2);
  visit('/all').then(function() {
    var length = 2;
    //Add 2 favorites
    Ember.RSVP.all([click('.game-card-component:first .favorite-icon'), click('.game-card-component:last .favorite-icon')]).then(function() {
      equal(find('.game-card-component.is-visible').length, totalGames - length, "The List should contains all non favorite games");
      visit('/favorites').then(function() {
        equal(find('.game-card-component.is-visible').length, length, "The List should contains only the favorite games");
      });
    });
  });
});
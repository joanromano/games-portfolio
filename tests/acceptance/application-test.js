import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

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
    equal(find('.game-card-component.is-visible').length, 119, "The List should contains all games");
  });
});
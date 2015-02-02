import DS from "ember-data";

/**
 * The adapter it's used to communicate to a backend server api (or fixture data)
 */
export default DS.RESTAdapter.extend({
  buildURL: function(type) {
    return type.pluralize() + '.json';
  }
});
import DS from "ember-data";

/**
 * TODO: Document
 * @param  {[type]} type) {               return type.pluralize() + '.json';  }} [description]
 * @return {[type]}       [description]
 */
export default DS.RESTAdapter.extend({
  buildURL: function(type) {
    return type.pluralize() + '.json';
  }
});
import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr('string'),
  short: DS.attr('string'),
  url: DS.attr('string'),
  tags: DS.attr('string'),
  hasBoosters: DS.attr('boolean')
});
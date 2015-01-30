import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr('string'),
  short: DS.attr('string'),
  url: DS.attr('string'),
  tags: DS.attr('string'),
  hasBoosters: DS.attr('boolean'),

  isFavorite: false,

  screenshot: function() {
    var shortName = this.get('short');
    if (!shortName) {return;}

    return "http://i1.midasplayer.com/images/games/" + shortName + "/dumps/screen_" + shortName + ".gif";
  }.property('short')
});
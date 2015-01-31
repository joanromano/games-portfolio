import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr('string'),
  short: DS.attr('string'),
  url: DS.attr('string'),
  tags: DS.attr('string'),
  hasBoosters: DS.attr('boolean'),

  isFavorite: false,

  screenshot: function() {
    return "http://i1.midasplayer.com/images/games/" + this.get('short') + "/dumps/screen_" + this.get('short') + ".gif";
  }.property('short'),

  icons: function() {
    var src = "http://i1.midasplayer.com/images/games/" + this.get('short') + "/" + this.get('short');

    return {
      small: src + "_60x60.gif",
      medium: src + "_81x46.gif",
      large: src + "_170x80.gif"
    };;
  }.property('short'),

  image: function() {
    return "http://i2.midasplayer.com/images/games/" + this.get('short') + "/tournamentPage/" + this.get('short') + "_764x260.jpg";
  }.property('short')
});
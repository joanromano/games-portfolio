/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'games-portfolio',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com",
      'font-src': "'self' data: use.typekit.net",
      'connect-src': "'self'",
      'img-src': "*",
      'style-src': "'self' 'unsafe-inline' use.typekit.net",
      'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com"
    },
    EmberENV: {
      FEATURES: {}
    },
    APP: {}
  };

  if (environment === 'development') {

  }

  if (environment === 'test') {
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'local') {
    ENV.locationType = 'hash';
  }

  if (environment === 'production') {

  }

  return ENV;
};

'use strict';

var logger = require('../../config/logger');
var config = require('../../config/config')

module.exports = function(app) {
  logger.info('User routes loaded');
  var continuum = require('../controllers/continuum.controller');
  app.route(config.restNamespace +'/login').post(continuum.login);
}
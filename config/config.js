'use strict';

var config = {};
if ( process.env.NODE_ENV === "production" ){
  config = require('../pro.config');
} else {
  config = require('../dev.config');
}

config.port = process.env.PORT || 8080

module.exports = config;
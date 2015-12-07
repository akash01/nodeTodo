'use strict';

var bunyan = require('bunyan');
var applogger = new bunyan({
  name: 'portal',
  streams: [
    {
      level: 'debug',
      stream: process.stdout
    }
  ]
});

module.exports = applogger;

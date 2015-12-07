'use strict';

var express       = require('express');
var cors          = require('cors');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var util          = require('util');
var path          = require('path');
var fs            = require('fs');

var config        = require('./config');
var logger        = require('./logger');

var models_path = path.join(process.cwd(), "./server/models");
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) require(models_path + '/' + file);
});

function startServer() {
  var app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(cookieParser());
  app.use(cors());

  var routes_path = path.join(process.cwd(), "./server/routes");
  fs.readdirSync(routes_path).forEach(function (file) {
    if (~file.indexOf('.js')) require(routes_path + '/' + file)(app);
  });

  app.set('port', config.port);

  var server = app.listen(app.get('port'), function() {
    logger.info('Express server listening on port ' + server.address().port);
  });

};

module.exports.startServer = startServer;
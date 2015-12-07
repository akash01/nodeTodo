'use strict';

var cluster    = require('cluster');

var logger     = require('./config/logger.js');
var app        = require('./config/express.js');

if(cluster.isMaster) {
  logger.info(' Master process started.' );

  cluster.on('exit', function(worker, code, signal) {
    var exitCode = worker.process.exitCode;
    logger.warn(' Worker ' + worker.process.pid + 'died (' + exitCode + ' ). Restarting ...' );
    cluster.fork();
  });

  var count = 1;
  if ( process.env.NODE_ENV &&process.env.NODE_ENV !== "development" ) {
    count = require('os').cpus().length;
  }

  logger.info(' Starting ' +count+ ' child process', process.env.NODE_ENV);
  for (var i=0; i<count; i++) {
    cluster.fork();
  }
  return;
}

logger.info(' Worker ' +cluster.worker.process.pid+ ' started');

app.startServer( );
'use strict';

var mongoose = require('mongoose')

exports.login = function(req, res) {


  var requestify = require('requestify');

  requestify.get('weriot.lab.fi.eu.ericsson.se/v1/oauth2/token', {grant_type: 'atlassian_crowd_login'})
    .then(function(response) {
      var rawData = response.getBody();
      makeData(rawData);
    }, function(error, status) {
      logger.error('Something went wrong', error );
    }
  );

/*  url = "weriot.lab.fi.eu.ericsson.se";
  username = "ethamuk";
  password = "ethamuk";
  token = "/v1/oauth2/token"*/


};
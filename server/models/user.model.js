'use strict';

var mongoose = require('mongoose'),
  Schema     = mongoose.Schema;

/*
* User schema
*/
var UserSchema = new Schema({
  created : {
    type: Date,
    default: Date.now,
    index: true,
  },
  uid: {
    type: String,
    index: true,
    unique: true,
    trim: true
  }
});

mongoose.model('User', UserSchema);

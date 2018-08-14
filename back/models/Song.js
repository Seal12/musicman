var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var SongSchema = new Schema({
  title: {type: String, required: [true, "can't be blank"], index: true},
  artist: {type: String, required: [true, "can't be blank"], index: true},
  genre: String,
}, {timestamps: true});

mongoose.model('Song', SongSchema);

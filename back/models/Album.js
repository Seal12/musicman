var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var AlbumSchema = new Schema({
  title: {type: String, required: [true, "can't be blank"], index: true},
  artist: {type: String, required: [true, "can't be blank"], index: true},
  genre: String,
  songs:[
      {type: Schema.Types.ObjectId, ref: 'Song'}
    ]
}, {timestamps: true});

mongoose.model('Album', AlbumSchema);

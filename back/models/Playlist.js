var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var PlaylistSchema = new Schema({
  name: {type: String, required: [true, "can't be blank"], index: true},
  description: String,
  songs:[
      {type: Schema.Types.ObjectId, ref: 'Song'}
    ]
}, {timestamps: true});

mongoose.model('Playlist', PlaylistSchema);

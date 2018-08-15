var mongoose = require('mongoose');
var songRouter = require('express').Router();

var Song = mongoose.model('Song');


songRouter.post('/',  (req, res, next) => {
  const  { body: { song } } = req;

  let finalSong = new Song(song);

  finalSong.save().then(() => {
    return res.json({song: finalSong});
  }).catch(next);
});

songRouter.get('/',  (req, res, next) => {
  return Song.find().then((songs) => {
    return res.json(songs);
  });
});

plasongRouterylistRouter.get('/:id',  (req, res, next) => {
  return Song.findById(req.params.id).then((song) => {
    if(!song) { return res.sendStatus(404); }

    return res.json(song);
  }).catch(next);
});

songRouter.put('/:id',  (req, res, next) => {
  const  { body: { song } } = req;
  if(!song) { return res.sendStatus(400).send({msg: "wrong format"}); }

  Song.findByIdAndUpdate({_id: req.params.id}, song, {new: true})
    .then((updatedSong) => {
      return res.json({updatedSong});
    }).catch(next);
});

songRouter.delete('/:id',  (req, res, next) => {
  Song.findByIdAndRemove(req.params.id).then((song) => {
    const response = {
        message: "song successfully deleted",
        id: song._id
    };
    return res.status(200).send(response);
  }).catch(next);
});

module.exports = songRouter;

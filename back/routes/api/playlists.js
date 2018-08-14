var mongoose = require('mongoose');
var playlistRouter = require('express').Router();

var Playlist = mongoose.model('Playlist');


playlistRouter.post('/',  (req, res, next) => {
  const  { body: { playlist } } = req;

  let finalPlaylist = new Playlist(playlist);

  finalPlaylist.save().then(() => {
    return res.json({playlist: finalPlaylist});
  }).catch(next);
});

playlistRouter.get('/',  (req, res, next) => {
  return Playlist.find().then((playlists) => {
    return res.json(playlists);
  });
});

playlistRouter.get('/:id',  (req, res, next) => {
  return Playlist.findById(req.params.id).then((playlist) => {
    if(!playlist) { return res.sendStatus(404); }

    return res.json(playlist);
  }).catch(next);
});

playlistRouter.put('/:id',  (req, res, next) => {
  const  { body: { playlist } } = req;
  if(!playlist) { return res.sendStatus(400).send({msg: "wrong format"}); }

  Playlist.findByIdAndUpdate({_id: req.params.id}, playlist, {new: true})
    .then((updatedPlaylist) => {
      return res.json({updatedPlaylist});
    }).catch(next);
});

playlistRouter.delete('/:id',  (req, res, next) => {
  Playlist.findByIdAndRemove(req.params.id).then((playlist) => {
    const response = {
        message: "playlist successfully deleted",
        id: playlist._id
    };
    return res.status(200).send(response);
  }).catch(next);
});

module.exports = playlistRouter;

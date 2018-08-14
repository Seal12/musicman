var mongoose = require('mongoose');
var albumRouter = require('express').Router();

var Album = mongoose.model('Album');


albumRouter.post('/',  (req, res, next) => {
  const  { body: { album } } = req;

  let finalAlbum = new Album(album);

  finalAlbum.save().then(() => {
    return res.json({album: finalAlbum});
  }).catch(next);
});

albumRouter.get('/',  (req, res, next) => {
  return Album.find().then((albums) => {
    return res.json(albums);
  });
});

albumRouter.get('/:id',  (req, res, next) => {
  return Album.findById(req.params.id).then((album) => {
    if(!album) { return res.sendStatus(404); }

    return res.json(album);
  }).catch(next);
});

albumRouter.put('/:id',  (req, res, next) => {
  const  { body: { album } } = req;
  if(!album) { return res.sendStatus(400).send({msg: "wrong format"}); }

  Album.findByIdAndUpdate({_id: req.params.id}, album, {new: true})
    .then((updatedAlbum) => {
      return res.json({updatedAlbum});
    }).catch(next);
});

albumRouter.delete('/:id',  (req, res, next) => {
  Album.findByIdAndRemove(req.params.id).then((album) => {
    const response = {
        message: "album successfully deleted",
        id: album._id
    };
    return res.status(200).send(response);
  }).catch(next);
});

module.exports = albumRouter;

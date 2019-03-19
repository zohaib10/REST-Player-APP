const express = require('express');
const router = express.Router();

const Player = require('../models/player');

//The next parameter calls on the next middleware that is setup
router.get('/players', function(req, res, next) {
  Player.find().then(ninjas => res.send(ninjas));
});

router.post('/players', function(req, res, next) {
  console.log(req.body);
  Player.create(req.body)
    .then(function(player) {
      res.send(player);
    })
    .catch(next);
});

router.put('/players/:id', function(req, res, next) {
  Player.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Player.findOne({ _id: req.params.id }).then(ninja => res.send(ninja));
  });
});

router.delete('/players/:id', function(req, res, next) {
  Player.findByIdAndRemove({ _id: req.params.id }).then(ninja =>
    res.send(ninja)
  );
});

module.exports = router;

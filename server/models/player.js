const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  nationalSide: {
    type: String
  },
  dob: {
    type: String
  }
});

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;

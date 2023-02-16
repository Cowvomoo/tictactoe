const mongoose = require('mongoose');

// const boardSchema = new Schema({
//   row1: {
//     type: Array,
//     default: [null, null, null],
//   },
//   row2: {
//     type: Array,
//     default: [null, null, null],
//   },
//   row3: {
//     type: Array,
//     default: [null, null, null],
//   },
// });

const lobbySchema = new mongoose.Schema({
  board: {
    default: {
      row1: [null, null, null],
      row2: [null, null, null],
      row3: [null, null, null],
    },
  },
  id: {
    type: String,
    required: true,
  },
  players: {
    type: Array,
    default: [],
  },
});

//exports.board = mongoose.model('board', boardSchema);

exports.lobby = mongoose.model('lobby', lobbySchema);

//i need to find by id the lobby when press connect then add player to players list and then use react, get all the data from the database of who is in the lobby, which team, etc, display board with current board position of lobby, assign player.

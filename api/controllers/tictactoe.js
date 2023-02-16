const Game = require('../models/tictactoe.js');
const mongoose = require('mongoose');

exports.postNewLobby = async (req, res) => {
  const lobby = new Game.lobby();
  lobby.save();
};

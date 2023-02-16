const Game = require('../models/tictactoe.js');
const mongoose = require('mongoose');

exports.getNewLobby = async (req, res) => {
  const lobby = new Game.lobby();
  lobby.save();
  res.json(lobby.id_);
};

const tictactoe = require('../controllers/tictactoe.js');
const express = require('express');
const router = express.Router();

router.get('/lobby/create', tictactoe.getNewLobby);

module.exports = router;

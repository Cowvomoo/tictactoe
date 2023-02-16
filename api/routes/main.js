const tictactoe = require('../controllers/tictactoe.js');
const express = require('express');
const router = express.Router();

router.post('/lobby/create', tictactoe.postNewLobby);



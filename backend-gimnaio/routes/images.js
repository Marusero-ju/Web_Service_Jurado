const express = require('express');

const upload = require('../multer/storage');

const { createCard } = require('../controllers/cardEntrenamiento.controller');

const api = express.Router();

api.post('/cards', upload, createCard);

module.exports = api;
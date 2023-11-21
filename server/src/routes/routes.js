const express = require('express');
const PromptController = require('../controllers/prompt-controller');
const routes = express.Router();

routes.post('/text', PromptController.sendText);

module.exports = routes;
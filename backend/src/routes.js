const express = require('express');

const FormController = require('./controllers/FormController');

const routes = express.Router();

routes.get('/');

routes.post('/status',FormController.StorageEvent);

routes.get('/status',FormController.index);

module.exports = routes;
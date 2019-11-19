const express = require('express');

const FormController = require('./controllers/FormController');

const routes = express.Router();

routes.get('/',FormController.StorageEvent);

module.exports = routes;
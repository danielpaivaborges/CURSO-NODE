'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const tourController = require('./routes/tourRoutes');
const userController = require('./routes/userRoutes');

// Add middleware
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/tours', tourController);
app.use('/api/v1/users', userController);

module.exports = app;

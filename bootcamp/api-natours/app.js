'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const tourController = require('./routes/tourRoutes');
const userController = require('./routes/userRoutes');

// Import functions from 'funcoes' file
const {
  getTour,
  getTours,
  deleteTour,
  updateTour,
  postTour,
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser
} = require('./funcoes');


// Add middleware

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/tours', tourController);
app.use('/api/v1/users', userController);

module.exports = app
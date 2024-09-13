'use strict';

const express = require('express');
const app = express();
const fs = require('fs');

// Import functions from 'funcoes' file
const {
  getTour,
  getTours,
  deleteTour,
  updateTour,
  postTour,
} = require('./funcoes');

// Configure express to parse JSON requests
app.use(express.json());

// Define routes for tours
app
  .route('/api/v1/tours')
  .get(getTours) // Get all tours
  .post(postTour); // Create a new tour

app
  .route('/api/v1/tours/:id')
  .get(getTour) // Get a single tour by ID
  .patch(updateTour) // Update a tour
  .delete(deleteTour); // Delete a tour

// Start the server
app.listen(3000, () => {
  console.log('Server started...');
});

'use strict';
const express = require('express');
const app = express();
const fs = require('fs');
const {
  getTour,
  getTours,
  deleteTour,
  updateTour,
  postTour,
} = require('./funcoes');

//usando o middleware
app.use(express.json());

app.route('/api/v1/tours').get(getTours).post(postTour);
app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

app.listen(3000, (error) => {
  console.log('servidor iniciado...');
});

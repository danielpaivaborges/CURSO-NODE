'use strict';
const express = require('express')
const router = express.Router()
const {
    getTour,
    getTours,
    deleteTour,
    updateTour,
    postTour,   
  } = require('../funcoes');

router.param('id',(req, res, next, val)=>{
  console.log(`o ID informado foi: ${val}`)
  next()
})

// Log request time middleware
function logRequestTime(req, res, next) {
  req.requestTime = new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(new Date());
  next();
}

//criando um middleware para avaliar os dados antes de fazer o post


router.use(logRequestTime)
// Define routes for tours
router
  .route('/')
  .get(getTours) // Get all tours
  .post(postTour); // Create a new tour

router
  .route('/:id')
  .get(getTour) // Get a single tour by ID
  .patch(updateTour) // Update a tour
  .delete(deleteTour); // Delete a tour

  module.exports = router
'use strict';
const express = require('express');
const userRouter = express.Router();
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../funcoes');

userRouter.param('id',(req, res, next, val)=>{
  console.log(`o ID informado foi: ${val}`)
  next()
})

// Log request time middleware
function logRequestTime(req, res, next) {
  req.requestTime = new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(new Date());
  console.log(req.requestTime)
  next();
}
userRouter.use(logRequestTime);

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter

'use strict';
const express = require('express');
const fs = require('fs');

//importando os dados
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);



const getTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'dados retornados com sucesso',
    results: tours.length,
    data: {
      tours,
    },
  });
};

const postTour = (req, res) => {
  const newTour = { id: tours.length, ...req.body };
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours, null, 2),
    (err) => {
      res.status(201).json({
        status: 'sucesso..., registro criado e gravado',
        tour: newTour,
      });
    }
  );
};

const getTour = (req, res) => {
  //aqui  vem um truque interessante de como converter o id que é uma string em um número
  const tour = tours.find((elemento) => elemento.id === Number(req.params.id));
  if (tour) {
    res.status(200).json({
      status: 'sucesso',
      data: {
        tour,
      },
    });
  } else {
    res.status(404).json({
      status: 'nenhum registro encontrado.',
    });
  }
};

const updateTour = (req, res) => {
  const tour = tours.find((elemento) => elemento.id === Number(req.params.id));
  if (tour) {
    res.status(200).json({
      status: 'sucesso',
      data: {
        tour: 'dados atualizados',
      },
    });
  } else {
    res.status(404).json({
      status: 'nenhum registro encontrado.',
    });
  }
};

const deleteTour = (req, res) => {
  const tour = tours.find((elemento) => elemento.id === Number(req.params.id));
  if (tour) {
    res.status(200).json({
      status: 'sucesso',
      data: {
        tour: 'dados apagados',
      },
    });
  } else {
    res.status(404).json({
      status: 'nenhum registro encontrado.',
    });
  }
};

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'erro',
    mensagem: 'esta rota não foi encontada',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'erro',
    mensagem: 'esta rota não foi encontrada',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'erro',
    mensagem: 'esta rota não foi encontrada',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'erro',
    mensagem: 'esta rota não foi encontrada',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'erro',
    mensagem: 'esta rota não foi encontrada',
  });
};

module.exports = {
  getTour,
  getTours,
  deleteTour,
  updateTour,
  postTour,
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};

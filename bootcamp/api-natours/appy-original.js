'use strict';
const express = require('express');
const app = express();
const fs = require('fs');

//importando os dados
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

//usando o middleware
app.use(express.json());

//rota inicial GET
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'dados retornados com sucesso',
    results: tours.length,
    data: {
      tours,
    },
  });
});

//CRIANDO ROTA POST
app.post('/api/v1/tours', (req, res) => {
  const newID = tours.length;
  const newTour = { id: newID, ...req.body };
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'sucesso..., registro criado e gravado',
        tour: newTour,
      });
    }
  );
});

//ROTA PARA RECUPERAR REGISTRO
app.get('/api/v1/tours/:id', (req, res) => {
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
});

//rota para atualizar registro com PATCH
app.patch('/api/v1/tours/:id', (req, res) => {
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
});

//rota para apagar
app.delete('/api/v1/tours/:id', (req, res) => {
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
});

app.listen(3000, (error) => {
  console.log('servidor iniciado...');
});

const express = require('express')
const conexao = require('./database/database')


const app = express()


conexao.authenticate().then((error)=>{
    if(!error){
        console.log("banco de dados conectado com sucesso")
    }
})

app.listen(21005, (error)=>{
    if(!error){
        console.log("servidor iniciado com sucesso")
    }
})
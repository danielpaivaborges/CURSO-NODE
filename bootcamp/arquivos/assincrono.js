"use strict";
const fs = require('fs')

//trabalhando de forma assíncrona
fs.readFile('./txt/start.txt', 'utf-8', (err, data)=>{
    console.log(data)
})
console.log('o arquivo será lido...')
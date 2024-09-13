'use strict'
const fs = require('fs')

//lendo arquivos de forma sincrona
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn)

//escrevendo arquivos de forma sincrona
const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}.`
fs.writeFileSync('./txt/output.txt', textOut)
console.log('O arquivo foi criado')
console.log(fs.readFileSync('./txt/output.txt', 'utf-8'))



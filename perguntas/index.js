const express = require('express')


const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res)=>{
    res.render('index')
})

app.get('/perguntar',(req, res)=>{
    res.render('perguntar')
})

app.post("/salvarpergunta", (req, res)=>{
    const titulo = req.body.titulo
    const descricao = req.body.descricao
    res.send(`a pergunta ${titulo} tem o texto ${descricao}`)
})

app.listen(21005, (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Servidor ativado com sucesso!!!")
    }
})
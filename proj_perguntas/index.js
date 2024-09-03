const express = require("express");

//criando o aplicativo
const app = express();


//configurando o aplicativo
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/perguntar', (req,res)=>{
    res.render('perguntar')
})

//subindo o servidor
app.listen(21005, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("servidor iniciado com sucesso...");
  }
});

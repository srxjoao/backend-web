// Extra nodemon e um modulo para a reiniciar o servidor automatico, para a execução do projeto utilizamos o comando npm start.
const express = require("express");
// Modulo para trabalhar com caminhos
const path = require("path");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Criar rotas
// post ele vai cripitografar a informção exemplo tenhoo uma senha ele vai a deixar cripitografada, com get e visivel a informação,não enviamos informações sensiveis com o get
app.get("/", (req,res)=>{
    res.send("Bem-Vindo ao nosso Sistema  <a href='/login'>Entrar</a>");
});

app.get("/login", (req,res) => {
    const caminho = path.join(__dirname, "views","login.html")
    res.sendFile(caminho)
})

app.post("/login", (req,res) => {
    res.send("Realizando Login com " +  req.body.email)
})

app.listen(8000,(err)=>{
    console.log("Server Rodando");
});
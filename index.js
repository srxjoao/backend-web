// Extra nodemon e um modulo para a reiniciar o servidor automatico, para a execução do projeto utilizamos o comando npm start.
const express = require("express");

const app = express();

// Criar rotas
// post ele vai cripitografar a informção exemplo tenhoo uma senha ele vai a deixar cripitografada, com get e visivel a informação,não enviamos informações sensiveis com o get
app.get("/", (req,res)=>{
    res.send("Você acessou a raiz do projeto");
});

app.get("/user", (req,res)=>{
    res.send("Você acessou a rota de usuários");
});

app.get("/user/:nome", (req,res)=>{
    let nome = req.params.nome;
    res.send(`Olá ${nome}`);
});

app.listen(8000,(err)=>{
    console.log("Server Rodando");
});
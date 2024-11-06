const http = require("http");
const  url  = require("url");
const app = http.createServer((req,res)=>{
    // Todas as requisições que chegaem
    // Vão ser tratradas nessa função
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html;charset=utf8")
    
    console.log("urlInfo");

    const urlInfo = url.parse(req.url, true);

    if(urlInfo.pathname == "/usuario"){
        res.end("Olá Usuário, João");
    }
    else if(urlInfo.pathname == "/"){
        res.end("Página Home");
    }
    else if(urlInfo.pathname == "/marvel"){
        res.end("O universo MCU é melhor que DC!");
    }
});

app.listen(8000, (err)=> {
    console.log("Servidor rodando")
})
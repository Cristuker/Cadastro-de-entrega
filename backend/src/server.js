const express = require('express');
const Form = require('./models/Form');
const http = require('http');


const app = express();
//const server = http.Server(app);

const port = 3333;

app.get('http://localhost:3001/', (request,response,next) => {
    response.send({express:'hello'})
    next();
});

app.listen(port, ()=> console.log(`Listen ${port}`))
const express = require('express');
const Form = require('./models/Form');
const http = require('http');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const server = http.Server(app);

 /*app.get('http://localhost:3000/', (request,response,next) => {
    next();
});

 app.post('http://localhost:3000/info', (request,response) => {
    
    const info =  request.body;
   console.log(info+'--');
})*/

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(3333)
const express = require('express');
const app = express();
const port = 300;


app.get('/', (req,res)=> res.send('Olá mundo pelo Epress!'))


app.listen(port,() => console.log('express'))
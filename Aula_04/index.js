const express = require('express');
const bodyParser = require('body-parser'); 
const port = 300;
const app = express();
const userRoute = require('./routes/userRoute.js');


app.use(bodyParser.urlencoded({extended: false}));

userRoute(app);

app.get('/',(req,res)=> res.send('Olá mundo') )


app.listen(port,()=>console.log('Express'));
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db.js');
var productController = require('./controllers/productControllers.js')

var app = express();
app.use(bodyParser.json());
app.use(cors({orgin: 'http://localhost:4200/sellerprod'}));
app.listen(3000,()=>console.log('Server started at port:3000'));

app.use('/products',productController)
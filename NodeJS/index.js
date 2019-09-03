require('./config/passportConfig');
const mongoose = require('./db.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");

const passport = require('passport');
//const rtsIndex = require('./routes/index.router');



var productController = require('./controllers/productControllers.js');
var userController = require('./controllers/userControllers.js')

var app = express();
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors({orgin: 'http://localhost:4200/sellerprod'}));
app.use("image",express.static(path.join("image")));


//For error handling
app.use((err,req,res,next)=>{
    if(err.name == 'ValidationError'){
        var valErrors=[];
        Object.keys(err.errors).forEach(key=>valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
});



app.listen(3000,()=>console.log('Server started at port:3000'));

app.use('/products',productController);
app.use('/users',userController);
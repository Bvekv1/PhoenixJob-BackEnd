const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}));
app.listen('4000');
console.log('Server is ready')
module.exports =app;
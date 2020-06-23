const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}));
const userController = require('./controllers/userController');
app.post('/registerEmployee',userController.register);
app.listen('4000');
console.log('Server is ready')
module.exports =app;
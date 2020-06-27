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
const authValidatorController = require('./controllers/authValidatorController');
const jobController = require('./controllers/jobController.js');
app.post('/registerEmployee',authValidatorController.registerValidator,userController.register);
app.post('/loginUser',userController.Login);
app.post('/postJob',authValidatorController.verifyToken,jobController.postJob);
app.get('/displayJob',authValidatorController.verifyToken,jobController.displayJob);
app.listen('4000');
console.log('Server is ready')
module.exports =app;
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const userController = require('./controllers/userController');
const authValidatorController = require('./controllers/authValidatorController');
const jobController = require('./controllers/jobController.js');
const resumeController = require('./controllers/resumeUploadController.js');
const jobAppliedController = require('./controllers/jobAppliedController');
const hireApplicantController = require('./controllers/hireApplicantController');
const emailController = require('./controllers/emailController');

app.use(express.static(__dirname + "/public"));

// authentication API |*****************************************************************************
app.post('/api/v1/users',authValidatorController.registerValidator,userController.register);
app.post('/api/v1/users/login',userController.Login);
app.get('/api/v1/users',authValidatorController.userVerify);
app.get('/api/v1/users/:id', authValidatorController.verifyToken, userController.getUser);
app.put('/api/v1/users/:id',authValidatorController.verifyToken, userController.userUpdate);


// job API *****************************************************************************************
app.post('/api/v1/job',authValidatorController.verifyToken,jobController.postJob);
app.get('/api/v1/job',jobController.displayAllJob);
app.get('/api/v1/job/:jobId',jobController.jobDetails);
app.get('/api/v1/job/searchJobByTitle/:jobTitle',jobController.jobTitle);
app.get('/api/v1/job/searchJobByCategory/:jobType', jobController.searchJob);
app.put('/api/v1/job/:id',authValidatorController.verifyToken,jobController.jobinfoUpdate);
app.get('/api/v1/jobByUserId', authValidatorController.verifyToken, jobController.displayJob);
app.delete('/api/v1/job/:jobId', authValidatorController.verifyToken, jobController.deleteJob);

//job Applied API **********************************************************************************
app.post('/api/v1/jobApplied', authValidatorController.verifyToken, jobAppliedController.jobAppliedByUsers);
app.get('/api/v1/jobApplied', authValidatorController.verifyToken,jobAppliedController.getAppliedJobsByUserId);
app.delete('/api/v1/jobApplied/:jobId', authValidatorController.verifyToken,jobAppliedController.deleteAppliedJob);

//hire Applicant APIS **************************************************************************************
app.get('/api/v1/hire/:jobId',authValidatorController.verifyToken, hireApplicantController.getApplicants);
app.put('/api/v1/hire/:jobId',authValidatorController.verifyToken, hireApplicantController.hireApplicant);
app.put('/api/v1/reject/:jobId',authValidatorController.verifyToken, hireApplicantController.rejectApplicant);

app.get('/api/v1/notification',authValidatorController.verifyToken, hireApplicantController.getNotification);
app.post('/api/v1/resume', resumeController.file, resumeController.files);

app.post('/api/v1/nodeMail',emailController.contact);

//port define **************************************************************************************
app.listen('4000');
console.log('Server is ready');
module.exports = app;
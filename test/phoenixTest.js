var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should()

chai.use(chaiHttp);
const request = require('supertest');
const { assert, use } = require('chai');

var server = require('../index.js');
const { response } = require('express');

// describe('User',function(){

// 	describe('POST user registration in test',function(){

// 		it('the user should be registered, unique email and password is provided',function(done){
//         //    User eamil need to be unique eachtime test is run
// 		chai.request(server)
// 			.post('/registerEmployee')
// 			.set('content-type','application/x-www-form-urlencoded')
// 			.send({
//                 firstName:'jasmine',
//                 lastName:'jasmine',
//                 email:'jasmine@gmail.com',
//                 password:'bibek',
//                 userType:'0',
//                 companyName:'Job Portal',
//                 organizationType:'Job Provider',
//                 address:'ktm',
//                 country:'Nepal',
//                 city:'ktm',
//                 phone:'56465343',
//                 website:'jobportal.com',
//                 companyDescription:'Provide cv and apply'
                
// 			})
// 			.end(function(err,res){

// 				res.body.should.have.status('200')
// 				done();
// 			})
// 		})
// 	})
// })


// describe('User',function(){

// 	describe(' user login in test',function(){

// 		it('the user should be login, unique email and password is provided',function(done){

// 		chai.request(server)
// 			.post('/loginUser')
// 			.set('content-type','application/json')
// 			.send({
//                 email:'jasmine@gmail.com',
// 				password:'bibek'
// 			})
// 			.end(function(err,res){
                 
// 				res.body.should.have.status('200')
// 				done();
// 			})
// 		})
// 	})
// })


// describe('job',function(){

// 	describe('POST Job in test',function(){

// 		it('post job',function(done){

// 		chai.request(server)
//       .post('/postJob')
//       .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkzNjE4Mzk5fQ.Rlsn2pHvL0NcfRyAK4XLHYr4-9EkawYPWxBi31jcGaA'})
//       .set('content-type','application/x-www-form-urlencoded')
      
// 			.send({
//                 jobTitle:'Android developer',
//                 experience:'2 years',
//                 level:'bachelor',
//                 positions:'head',
//                 jobType:'full tume',
//                 salary:'30000',
//                 education:'bachelor',
//                 Location:'ktm',
//                 applyBefore:'2 july',
//                 jobDescription:'qualified developer',
//                 jobQualification:'bachelor',
//                 expected:'bachelor final running',
//                 jobHours:'8',
//                 benefits:'increasing salary with job progress'
            
                
// 			})
// 			.end(function(err,res){
//               res.body.should.have.status('200')
//                 //res.body.should.be.a('object');
//                 //res.body.should.have.property('message').eql('sucess');
// 				done();
// 			})
// 		})
// 	})
// })
 ///listJob
// describe('GET /display all job for homepage', function() {
//     it('responds with json', function(done) {
//       request(server)
//         .get('/displayAllJob')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
//   });

//   describe('GET /categorize job by jobtype ', function() {
//     it('responds with json', function(done) {
//       request(server)
//         .get('/searchJob/FullTIme')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
//   });
 /**
  * test get route for search job by jobTitle
  */
//   describe('GET/ user', function(){
//     it('responds with json', function(done){
//         request(server)
//         .get('/searchJobByTitle/Android Developer')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
// });


// /** 
//  * Test the job detaisl by id
//  */
// describe("GET /jobDetails/:jobId", () => {
//     it("It should GET a job details by ID", (done) => {
//        // const jobId = 1;
//         request(server)                
//             .get("/jobDetails/" + 6)
//             .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkzNjE4Mzk5fQ.Rlsn2pHvL0NcfRyAK4XLHYr4-9EkawYPWxBi31jcGaA'})
//             .set('Accept', 'application/json')
//          .expect('Content-Type', /json/)
//             .end((err, response) => {
//                 response.should.have.status(200);
//                response.body.should.be.a('array');
                
      
//           done();
//             });
//     });
//   });

//   /**
//  * Test  the put route for user profile update
//  */
// describe("Put /userUpdate/:id Edit",()=>{
//   it('post job',function(done){

//     const id = 1;
//     const user ={
//       name: "updateUserName",
//       email: "updateUserEmail@gamil.com",
//       password:"updateEmail",
//     companyName:"updateCompanyName",
//     organizationType:"updateOrganizationType",
//     address:"updateAddress",
//      country:"updateCountry",
//      city:"updateCity",
//      phone:"update9868",
//      website:"updateWebSite",
//      companyDescription:"updateDescription"

//     };
//     request(server)
//     .put("/userUpdate/"+id )
// .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkzNjE4Mzk5fQ.Rlsn2pHvL0NcfRyAK4XLHYr4-9EkawYPWxBi31jcGaA'})
//     .send(user)
//     .end((err,response)=>{
//       response.should.have.status(200);
//       done();
//     });
//  });
//   });

//   /**
//  * Test  the put route for job  update
//  */
// describe("Put /jobinfoUpdate/:id Edit job info",()=>{
//   it('update the job ',function(done){
//       const id = 1;
//       const user ={
//       jobTitle: "updateJobTitle",
//       experience: "updateJobInformation",
//       level:"updateJobLevel",
//       positions:"updateJobPositions",
//       jobType:"updateJobType",
//       salary:"updateSalary",  
//       education:"updateEducation",
//       location:"updateLocation",
//       applyBefore:"updateApplyBefore",
//       jobDescription:"updateJobDescription",
//       jobQualification:"updateJobQualification",
//       expected:"updateExpected",
//       jobHours:"updatejobHours",
//       benefits:"updateJobBenefits"

//       }; 
//     request(server)
//      .put("/jobinfoUpdate/"+id )
// .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkzNjE4Mzk5fQ.Rlsn2pHvL0NcfRyAK4XLHYr4-9EkawYPWxBi31jcGaA'})
//       .send(user)
//       .end((err,response)=>{
//      response.should.have.status(200);     
//       done();
//     });
//   });
// });
 
/** Sprint 4 test */
/** Test the delete route for job information */
/**job delete test with job id that exist */
// describe("Delete /api/v1/job/:jobId",()=>{
//     it("It should delete an existing task",(done)=>{
//         const jobId = 2;
//         request(server)
//         .delete("/api/v1/job/" + jobId)
//         .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlclR5cGUiOiIwIiwiaWF0IjoxNTk0ODgwOTEwfQ.RnioBwFB6jCXpr2tvpq7NgvTanoRk_bkWcGLuLwyY80'})
//         .end((err,response)=>{
//             response.should.have.status(200);
//             response.body.should.have.property('message').equal('job is successfully delete');
//             done();
//         });
//     });
//     /**job delete test with job id which does not exist */
//     it("It should not delete a job that is not in the database",(done)=>{
//         const jobId = 5000;
//         request(server)
//         .delete("/api/v1/job/" + jobId)
//         .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlclR5cGUiOiIwIiwiaWF0IjoxNTk0ODgwOTEwfQ.RnioBwFB6jCXpr2tvpq7NgvTanoRk_bkWcGLuLwyY80'})
//         .end((err,response) =>{
//             response.should.have.status(404);
//             response.body.should.have.property('message').equal('The job with provided id doesn`t exist.');
//             done();
//         });
//     });
// });


/**Test the select route for job applied */
// describe("Get /api/v1/apply/",() =>{
//    it ("It should Get a job by job applied  by user id",(done) =>{
        
//         request(server)
//         .get("/api/v1/JobApplied")
//        .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlclR5cGUiOiIwIiwiaWF0IjoxNTk0ODgwOTEwfQ.RnioBwFB6jCXpr2tvpq7NgvTanoRk_bkWcGLuLwyY80'})
       
//        .end((err,response) =>{
//             response.should.have.status(200);
            
//             done();
//         });
//     });
// });



/**
 * Test the post route for upload resume
 */
// describe('upload',function() {
// it('resume file',function (done) {
//   request.post('/api/v1/resume')
//   .attach('pdf','cv/resume.pdf')
//   .end(function (err,res) {
//     res.should.have.status(200);
//     done();
//   });
//   });

/** Test the delete route for job applied application */
//  describe("Delete /api/v1/job/:jobId",()=>{
//         it("It should delete an existing jobApplication",(done)=>{
//             const jobId = 2;
//             request(server)
//             .delete("/api/v1/jobApplied/" + jobId)
//             .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlclR5cGUiOiIwIiwiaWF0IjoxNTk0ODgwOTEwfQ.RnioBwFB6jCXpr2tvpq7NgvTanoRk_bkWcGLuLwyY80'})
//            .end((err,response)=>{
//                 response.should.have.status(200);
//                 response.body.should.have.property('message').equal('applied job successfully deleted');
//                done();
//             });
//         });
//         /**test the delete for if the job id doesn`t exist */
//       it("It should not delete a job application that is not in the database",(done)=>{
//           const jobId = 25;
//           request(server)
//           .delete("/api/v1/jobApplied/" + jobId)
//           .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlclR5cGUiOiIwIiwiaWF0IjoxNTk0ODgwOTEwfQ.RnioBwFB6jCXpr2tvpq7NgvTanoRk_bkWcGLuLwyY80'})
//           .end((err,response) =>{
//               response.should.have.status(404);
//               response.body.should.have.property('message').equal('applied job is failed to delete');
//               done();
//           });
//       });
//   });

  describe('POST applied job registration in test',function(){

     		it('test the jobapplied route for job aplication',function(done){
             
     		chai.request(server)
                 .post('/api/v1/jobApplied')
                 .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlclR5cGUiOiIwIiwiaWF0IjoxNTk0ODgwOTEwfQ.RnioBwFB6jCXpr2tvpq7NgvTanoRk_bkWcGLuLwyY80'})
     			.set('content-type','multipart/form-data')
     			.send({
                     jobId:'8',     
           })
           .attach({"fileName": 'E:\Misc\What Are Project Objectives.docx'}) 
     			.end((err,res) =>{
    
              res.body.should.have.status('200')
              
     				done();
     			})
     		})
       })
       
/** Sprint 5 test */
//company can view job applicants
/** Test the get route for job job applied*/
/** job applied get test if job applied doesnot exist*/

describe("GET /api/v1/jobApplied/:jobId",()=>{
  it('test if job applied by user exist',(done)=>{
    const jobId=2;
    request(server)
          .get("/api/v1/JobApplied/" + jobId)
          .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInVzZXJUeXBlIjoiMCIsImlhdCI6MTU5NTQwNjcyNn0.M4Aloar4ZRBxEOMIf8dcAIC2w3dpiaTIFbJnpRHb6Xk'})
          .end((err,response) =>{
                response.should.have.status(200);
                done();
  })
})
})

describe("GET function should display all users who applied for job",()=>{
  it('test if job applied by user exist',(done)=>{
    const jobId=2;
    request(server)
          .get("/api/v1/hire/" + jobId)
          .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInVzZXJUeXBlIjoiMCIsImlhdCI6MTU5NTQwNjcyNn0.M4Aloar4ZRBxEOMIf8dcAIC2w3dpiaTIFbJnpRHb6Xk'})
          .end((err,response) =>{
                response.should.have.status(200);
                done();
  })
})
})

describe("PUT changing hire status to hire applicants",()=>{
  it('test if job applied by user exist',(done)=>{
    const jobId=2;
    request(server)
          .put("/api/v1/hire/" + jobId)
          .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInVzZXJUeXBlIjoiMCIsImlhdCI6MTU5NTQwNjcyNn0.M4Aloar4ZRBxEOMIf8dcAIC2w3dpiaTIFbJnpRHb6Xk'})
          .send({
            hireStatus: true,
            userId: 9
          })
          .end((err,response) =>{
                response.should.have.status(200);
                done();
  })
})

describe("GET notifications once the user has been hired",()=>{
  it('test whether the user gets notifications or not',(done)=>{
    // const jobId=2;
    request(server)
          .get("/api/v1/notification")
          .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlclR5cGUiOiIxIiwiaWF0IjoxNTk1ODYxNjY3fQ.avxnWObT1NoT9quCPhToRSsBt-lL8G2vpt4DkHRF23g'})
          .end((err,response) =>{
                response.should.have.status(200);
                done();
  })
})
})

})

/** Sprint 6 test */
//user can view job email

describe("Post /api/v1/nodeMail",()=>{
  it('test if email is send',(done)=>{
    request(server)
          .post("/api/v1/nodeMail")
          .set('content-type','application/x-www-form-urlencoded')
          .send({
            "name":"Phoenix job",
            "from":"manish@gmail.com",
            "message":"you have been hired by company",
            "email": "manishngk99@gmail.com"
          })
          .end((err,response) =>{
                response.should.have.status(200);
                done();
  })
})
})


     
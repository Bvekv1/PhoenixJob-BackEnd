var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should()

chai.use(chaiHttp);

var server = require('../index.js')

describe('User',function(){

	describe('POST user registration in test',function(){

		it('the user should be registered, unique email and password is provided',function(done){
        //    User eamil need to be unique eachtime test is run
		chai.request(server)
			.post('/registerEmployee')
			.set('content-type','application/x-www-form-urlencoded')
			.send({
                firstName:'bikesh',
                lastName:'suwal',
                email:'suwal.bikesh1@gmail.com',
                password:'suwalbikesh',
                userType:'0',
                companyName:'Job Portal',
                organizationType:'Job Provider',
                address:'ktm',
                country:'Nepal',
                city:'ktm',
                phone:'56465343',
                website:'jobportal.com',
                companyDescription:'Provide cv and apply'
                
			})
			.end(function(err,res){

				res.body.should.have.status('200')
				done();
			})
		})
	})
})
var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should()

chai.use(chaiHttp);

var server = require('../index.js')

describe('User',function(){

	describe('POST user registration in test',function(){

		it('the user should be registered, unique email and password is provided',function(done){

		chai.request(server)
			.post('/registration')
			.set('content-type','application/x-www-form-urlencoded')
			.send({
                firstName:'Rohan',
                lastName:'Sharma Kharel',
                email:'rohan@gmail.com',
                passWord:'rohan123',
                userType:'2',
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

				res.body.should.have.property('status').eql('200')
				done();
			})
		})
	})
})
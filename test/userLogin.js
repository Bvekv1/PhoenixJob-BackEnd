var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should()

chai.use(chaiHttp);

var server = require('../index.js')

describe('User',function(){

	describe(' user login in test',function(){

		it('the user should be login, unique email and password is provided',function(done){

		chai.request(server)
			.post('/loginUser')
			.set('content-type','application/json')
			.send({
                email:'suwal@gmail.com',
				password:'asdf'
			})
			.end(function(err,res){
                 //token = res.body.token;
				res.body.should.have.status('200')
				done();
			})
		})
	})
})
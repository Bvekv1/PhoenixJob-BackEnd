var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should()

chai.use(chaiHttp);

var server = require('../index.js')

describe('User',function(){

	describe('POST Job in test',function(){

		it('post job',function(done){

		chai.request(server)
			.post('/postJob')
			.set('content-type','application/x-www-form-urlencoded')
			.send({
                jobTitle:'Android developer',
                experience:'2 years',
                level:'bachelor',
                positions:'head',
                salary:'30000',
                education:'bachelor',
                Location:'ktm',
                applyBefore:'2 july',
                jobDescription:'qualified developer',
                jobQualification:'bachelor',
                expected:'bachelor final running',
                jobHours:'8',
                benefits:'increasing salary with job progress',
                userId:'1'
			})
			.end(function(err,res){

				res.body.should.have.property('status').eql(200)
				done();
			})
		})
	})
})
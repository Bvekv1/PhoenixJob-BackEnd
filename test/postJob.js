var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should()

chai.use(chaiHttp);

var server = require('../index.js')

describe('job',function(){

	describe('POST Job in test',function(){

		it('post job',function(done){

		chai.request(server)
      .post('/postJob')
      .set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkzNjE4Mzk5fQ.Rlsn2pHvL0NcfRyAK4XLHYr4-9EkawYPWxBi31jcGaA'})
      .set('content-type','application/x-www-form-urlencoded')
      
			.send({
                jobTitle:'Android developer',
                experience:'2 years',
                level:'bachelor',
                positions:'head',
                jobType:'full tume',
                salary:'30000',
                education:'bachelor',
                Location:'ktm',
                applyBefore:'2 july',
                jobDescription:'qualified developer',
                jobQualification:'bachelor',
                expected:'bachelor final running',
                jobHours:'8',
                benefits:'increasing salary with job progress'
            
                
			})
			.end(function(err,res){
              res.body.should.have.status('200')
                //res.body.should.be.a('object');
                //res.body.should.have.property('message').eql('sucess');
				done();
			})
		})
	})
})
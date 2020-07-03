var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should();
const request = require('supertest');

chai.use(chaiHttp);

var server = require('../index.js');
const { assert } = require('chai');


describe('GET /user', function() {
  it('responds with json', function(done) {
    request(server)
      .get('/displayAllJob')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
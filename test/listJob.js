var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should()

chai.use(chaiHttp);

var server = require('../index.js');
const { assert } = require('chai');

describe("/GET Job display", () => {
  it("job display", (done) => {
    chai
      .request(server)
      .get("/dispalyAllJob")
      .end((err, res) => {
        res.body.should.be.a("object");
        done();
      });
  });
});
import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /users', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return a list of users with their products', async function () {
    const response = await chai.request(app).get('/users');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.an('array');
  });

});

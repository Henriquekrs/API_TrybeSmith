import sinon from 'sinon';
import bcrypt from 'bcryptjs';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import { SALT_ROUNDS } from '../../../src/database/seeders/1-users';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('returns status 200 and a token when the user is found', async function () {
    const username = 'Hagar';
    const password = 'terrível';

    const bcryptStub = sinon.stub(bcrypt, 'compareSync').returns(true);

    const response = await chai.request(app).post('/login').send({ username, password });

    expect(response).to.have.status(200);
    expect(response.body).to.have.property('token');
    expect(bcryptStub.called).to.be.true;
  });

});

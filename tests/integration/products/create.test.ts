import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return 201 and the created product', async function () {
    const body = { name: 'Product 1', price: '10.00', userId: 1 };

    const response = await chai.request(app).post('/products').send(body);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.have.property('id');
    expect(response.body).to.have.property('name');
    expect(response.body).to.have.property('price');
    expect(response.body).to.have.property('userId');
  });

});

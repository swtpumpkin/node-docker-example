const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('./app');
const agent = supertest.agent(app);

describe('node docker test', () => {
  it('get test', () => {
    return agent.get('/').expect(200).then(res => expect(res.text).to.be.equal('Hello World!'));
  });
});

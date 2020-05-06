const request = require('supertest');

const app = require('../server/server.js');

describe('Test the product overview endpoint', () => {
  // eventually test all individual product ids 1-100

  test('should respond with statusCode 200 for an in-range product id', done => {
    return request(app)
      .get('/35')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('should respond with json object with same body.info.id', done => {
    return request(app)
      .get('/35')
      .then(response => {
        expect(response.body.info.id).toBe(35);
        done();
      });
  });
});

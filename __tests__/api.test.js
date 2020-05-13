const request = require('supertest');

const app = require('../server/server.js');

const db = require('../db');

const Info100 = require('./mockServerResults/infoProd100.json');

const Images100 = require('./mockServerResults/imagesProd100.json');

const Info1 = require('./mockServerResults/infoProd1.json');

const Images1 = require('./mockServerResults/imagesProd1.json');

const reviews1 = require('./mockServerResults/reviews1.json');

const reviews100 = require('./mockServerResults/reviews100.json');


afterAll(() => {
  db.connection.end();
});

describe('/:id endpoint ', () => {

  test('should respond with statusCode 200 for an in-range product id', done => {
    return request(app)
      .get('/35')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('should respond with json object containing product info for product id 1', done => {
    return request(app)
      .get('/1')
      .then(response => {
        expect(response.body).toMatchObject(Info1);
        done();
      });
  });

  test('should respond with json object containing product info for product id 100', done => {
    return request(app)
      .get('/100')
      .then(response => {
        expect(response.body).toMatchObject(Info100);
        done();
      });
  });

  test('should respond with json object containing product 1 if a product id < 1 is requested', done => {
    return request(app)
      .get('/0')
      .then(response => {
        expect(response.body).toMatchObject(Info1);
        done();
      });
  });

  test('should respond with json object containing product 100 if a product id > 100 is requested', done => {
    return request(app)
      .get('/105')
      .then(response => {
        expect(response.body).toMatchObject(Info100);
        done();
      });
  });
});

describe('/images/:id endpoint', () => {

  test('should respond with json object for product id 1', done => {
    return request(app)
      .get('/images/1')
      .then(response => {
        expect(response.body).toMatchObject(Images1);
        done();
      });
  });

  test('should respond with json object for product id 100', done => {
    return request(app)
      .get('/images/100')
      .then(response => {
        expect(response.body).toMatchObject(Images100);
        done();
      });
  });

  test('should respond with json object of product 1 if a product id < 1 is requested', done => {
    return request(app)
      .get('/images/0')
      .then(response => {
        expect(response.body).toMatchObject(Images1);
        done();
      });
  });

  test('should respond with json object of product 100 if a product id > 100 is requested', done => {
    return request(app)
      .get('/images/105')
      .then(response => {
        expect(response.body).toMatchObject(Images100);
        done();
      });
  });
});

describe('/reviews/:id endpoint', () => {

  test('should respond with json object for product id 1', done => {
    return request(app)
      .get('/reviews/1')
      .then(response => {
        expect(response.body).toMatchObject(reviews1);
        done();
      });
  });

  test('should respond with json object for product id 100', done => {
    return request(app)
      .get('/reviews/100')
      .then(response => {
        expect(response.body).toMatchObject(reviews100);
        done();
      });
  });

  test('should respond with json object of product 1 if a product id < 1 is requested', done => {
    return request(app)
      .get('/reviews/0')
      .then(response => {
        expect(response.body).toMatchObject(reviews1);
        done();
      });
  });

  test('should respond with json object of product 100 if a product id > 100 is requested', done => {
    return request(app)
      .get('/reviews/105')
      .then(response => {
        expect(response.body).toMatchObject(reviews100);
        done();
      });
  });
});
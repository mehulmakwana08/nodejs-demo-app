const request = require('supertest');
const app = require('./app');

describe('Node.js Demo App', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body.message).toBe('Hello World from Node.js CI/CD Demo!');
  });

  test('GET /health should return status OK', async () => {
    const response = await request(app)
      .get('/health')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body.status).toBe('OK');
  });
});

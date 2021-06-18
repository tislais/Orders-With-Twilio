import dotenv from 'dotenv';
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

dotenv.config();

describe('order routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates an order via POST', async () => {
    const res = await request(app)
      .post('/api/v1/orders')
      .send({ 
        quantity: 5
      });
    expect(res.body).toEqual({
      id: 1,
      quantity: 5
    });
  });
});

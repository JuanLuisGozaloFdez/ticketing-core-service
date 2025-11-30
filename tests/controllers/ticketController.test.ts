import request from 'supertest';
import app from '../../src/app';

describe('TicketController', () => {
  it('GET /health returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('creates and retrieves a ticket', async () => {
    const createRes = await request(app).post('/tickets').send({ title: 'Concert', owner: 'alice' });
    expect(createRes.status).toBe(201);
    expect(createRes.body).toHaveProperty('id');
    const id = createRes.body.id;

    const getRes = await request(app).get(`/tickets/${id}`);
    expect(getRes.status).toBe(200);
    expect(getRes.body).toMatchObject({ title: 'Concert', owner: 'alice' });
  });

  it('returns 400 for missing fields', async () => {
    const res = await request(app).post('/tickets').send({ title: 'NoOwner' });
    expect(res.status).toBe(400);
  });
});

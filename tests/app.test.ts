import request from 'supertest';
import app from '../src/app';

describe('Basic health check', ()=> {
    it('GET /health should return status 200 and {status : "ok"}', async() => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ status : 'ok' });
    });
});
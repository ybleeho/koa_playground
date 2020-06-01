import request from 'supertest';
import app from '../src/app';

describe("Router Tests", () => {
    test('It should response the GET method' , async () => {
        const response = await request(app.callback()).get('/');

        expect(response.status).toEqual(200);
    })
})

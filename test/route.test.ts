import request from 'supertest';

import app from '../src/app';

const server = app.callback();

describe('Router Tests', () => {
    test('should respond with 200 (/)' , async () => {
        const response = await request(server).get('/')
        expect(response.status).toEqual(200);
    })
})

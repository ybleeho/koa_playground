import supertest from 'supertest';

import app from '../src/app';

const server = app.callback();

test('Router Tests' , async () => {
    const response = await supertest(server).get('/users/5ecf6294bda62e3ce6f5b784')
    expect(response.status).toEqual(200);
})

import { spec, expect } from 'pactum';
import { startServer, stopServer } from '../../mocks/helper/server';
import { ENV } from '../env/manager';
import { fetchMockResponseDataByFileName } from '../../mocks/helper/fileHandler';

describe('user test suite', () => {

    if (process.env.ENV === 'local') {
        before(async () => {
            await startServer(3001, 'localhost');
        });

        after(async () => {
            await stopServer();
        });
    }

    it('should get user 1', async () => {
        await spec().get(`${ENV.BASE_URL}/api/users/1`)
            .expectStatus(200)
            .expectBody(fetchMockResponseDataByFileName('1.json'));
    });

    it('should get user 2', async () => {
        await spec().get(`${ENV.BASE_URL}/api/users/2`)
            .expectStatus(200)
            .expectBody(fetchMockResponseDataByFileName('2.json'));
    });

    it('should get user 3', async () => {
        const data = await spec().get(`${ENV.BASE_URL}/api/users/3`).toss();
        expect(data.statusCode, 200);
        expect(data.body, { id: 3 });
    });

    it('should get user 4', async () => {
        const data = await spec().get(`${ENV.BASE_URL}/api/users/4`).toss();
        expect(data.statusCode, 200);
        expect(data.body, { id: 4 });
    });

    it('should get user 5', async () => {
        const data = await spec().get(`${ENV.BASE_URL}/api/users/5`).toss();
        expect(data.statusCode, 200);
        expect(data.body, { id: 5 });
    });

    it('should get user 6', async () => {
        const data = await spec().get(`${ENV.BASE_URL}/api/users/6`).toss();
        expect(data.statusCode, 200);
        expect(data.body, { id: 6 });
    });

    it('should get user 7', async () => {
        const data = await spec().get(`${ENV.BASE_URL}/api/users/7`).toss();
        expect(data.statusCode, 200);
        expect(data.body, { id: 7 });
    });

    it('should get user 8', async () => {
        const data = await spec().get(`${ENV.BASE_URL}/api/users/8`).toss();
        expect(data.statusCode, 200);
        expect(data.body, { id: 8 });
    });

    it('should get user 9', async () => {
        const data = await spec().get(`${ENV.BASE_URL}/api/users/9`).toss();
        expect(data.statusCode, 200);
        expect(data.body, { id: 9 });
    });

    it('should get user 10', async () => {
        const data = await spec().get(`${ENV.BASE_URL}/api/users/10`).toss();
        expect(data.statusCode, 200);
        expect(data.body, { id: 10 });
    });

    it('should get user 11', async () => {
        const data = await spec().get(`${ENV.BASE_URL}/api/users/11`).toss();
        expect(data.statusCode, 200);
        expect(data.body, { id: 11 });
    });

    it('should get user 12', async () => {
        const data = await spec().get(`${ENV.BASE_URL}/api/users/12`).toss();
        expect(data.statusCode, 200);
        expect(data.body, { id: 12 });
    });

    it('should get user 30', async () => {
        const data = await spec().get(`${ENV.BASE_URL}/api/users/30`).toss();
        expect(data.statusCode, 404);
    });

});
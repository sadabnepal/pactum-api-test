import { spec, expect } from 'pactum';
import { startServer, stopServer } from '../../mocks/helper/server';
import { ENV } from '../env/manager';
import { fetchMockedUserResponseDataByFileName } from '../../mocks/helper/fileHandler';

describe('fetch user test suite', () => {

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
            .expectBody(fetchMockedUserResponseDataByFileName('1.json'));
    });

    it('should get user 2', async () => {
        await spec().get(`${ENV.BASE_URL}/api/users/2`)
            .expectStatus(200)
            .expectBody(fetchMockedUserResponseDataByFileName('2.json'));
    });

    it('should get user 2 with params', async () => {
        await spec()
            .get(`${ENV.BASE_URL}/api/users/{userId}`)
            .withPathParams({
                'userId': 1
            })
            .expectStatus(200)
            .expectJson(fetchMockedUserResponseDataByFileName('1.json'));
    });

    it('should get user 30', async () => {
        const data = await spec().get(`${ENV.BASE_URL}/api/users/30`).toss();
        expect(data.statusCode, 404);
    });

});
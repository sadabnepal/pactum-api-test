import { spec } from 'pactum';
import { like } from 'pactum-matchers';
import { startServer, stopServer } from '../../mocks/helper/server';
import { ENV } from '../env/manager';

describe('create user test suite', () => {

    if (process.env.ENV === 'local') {
        before(async () => {
            await startServer(3001, 'localhost');
        });

        after(async () => {
            await stopServer();
        });
    }

    it('should create user with json body', async () => {
        const payload = {
            name: 'sadab',
            job: 'tester'
        };

        await spec()
            .post(`${ENV.BASE_URL}/api/users`)
            .withJson(payload)
            .expectStatus(201)
            .expectJsonMatch({
                ...payload,
                id: like(''),
                createdAt: like('')
            });
    });

});
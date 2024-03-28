import { spec } from 'pactum';
import { startServer, stopServer } from '../../mocks/helper/server';
import { ENV } from '../env/manager';
import { fetchMockedPageResponseDataByFileName } from '../../mocks/helper/fileHandler';

describe('fetch list of users test suite', () => {

    if (process.env.ENV === 'local') {
        before(async () => {
            await startServer(3001, 'localhost');
        });

        after(async () => {
            await stopServer();
        });
    }


    it('should get page 2 with query params', async () => {
        await spec()
            .get(`${ENV.BASE_URL}/api/users`)
            .withQueryParams({ page: 2 })
            .expectStatus(200)
            .expectBody(fetchMockedPageResponseDataByFileName('2.json'));
    });


});
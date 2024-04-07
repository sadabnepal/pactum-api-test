import { spec, expect } from 'pactum';
import { startServer, stopServer } from '../../mocks/helper/server';
import { ENV } from '../env/manager';
import { fetchMockedUserResponseDataByFileName } from '../../mocks/helper/fileHandler';
import { readFileSync } from 'fs';

describe('fetch user test suite', () => {

    if (process.env.ENV === 'local') {
        before(async () => {
            await startServer(3001, 'localhost');
        });

        after(async () => {
            await stopServer();
        });
    }

    it('should get user', async () => {
        await spec().get(`${ENV.BASE_URL}/api/users/1`)
            .expectStatus(200)
            .expectBody(fetchMockedUserResponseDataByFileName('1.json'));
    });

    it('should get user with method and with path', async () => {
        await spec()
            .withMethod('GET')
            .withPath(`${ENV.BASE_URL}/api/users/2`)
            .expectStatus(200)
            .expectBody(fetchMockedUserResponseDataByFileName('2.json'));
    });

    it('should try to get non-existing user', async () => {
        const data = await spec().get(`${ENV.BASE_URL}/api/users/30`).toss();
        expect(data.statusCode, 404);
    });

    it('should get user with path params', async () => {
        await spec()
            .get(`${ENV.BASE_URL}/api/users/{userId}`)
            .withPathParams({ userId: 1 })
            .expectStatus(200)
            .expectJson(fetchMockedUserResponseDataByFileName('1.json'));
    });

    it.skip('should get user with headers', async () => {
        await spec()
            .get(`${ENV.BASE_URL}/api/users`)
            .withHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
            .expectStatus(200);
    });

    it.skip('should get user with cookies', async () => {
        await spec()
            .get(`${ENV.BASE_URL}/api/users`)
            .withCookies({
                'foo': 'bar',
                'http': null
            })
            .expectStatus(200);
    });

    it('should get user with bearer token', async () => {
        const tokenValue = 'my token';
        await spec()
            .get(`${ENV.HTTP_BIN_URL}/bearer`)
            .withBearerToken(tokenValue)
            .expectStatus(200)
            .expectBodyContains(tokenValue);
    });

    it.skip('should get user with basic auth', async () => {
        await spec()
            .get(`${ENV.BASE_URL}/api/users`)
            .withAuth('username', 'password')
            .expectStatus(200);
    });

    it.skip('should get user with form', async () => {
        await spec()
            .post(`${ENV.BASE_URL}/forms/posts`)
            .withForm({
                user: 'jon',
                password: 'abc'
            })
            .expectStatus(201);
    });

    it.skip('should get user with file', async () => {
        await spec()
            .post(`${ENV.BASE_URL}/forms/posts`)
            .withFile('./path/fail', { contentType: 'image/png' })
            .expectStatus(201);
    });

    it.skip('should get user with multiPartFormData', async () => {
        await spec()
            .post(`${ENV.BASE_URL}/forms/posts`)
            .withMultiPartFormData('file', readFileSync('sample.txt'), { filename: 'sample.txt' })
            .expectStatus(201);
    });

    it.skip('should get user with graphql query', async () => {
        await spec()
            .post(`${ENV.BASE_URL}/forms/posts`)
            .withGraphQLQuery(`{
                query: {
                    user(id: 1) {
                        name
                    }
                }
            }`)
            .expectStatus(201);
    });

    it.skip('should get user with graphql query with variable', async () => {
        await spec()
            .post('/api/users')
            .withGraphQLQuery(`query HeroNameAndFriends($episode: Episode) {
                hero(episode: $episode) {
                    name
                    friends {
                        name
                    }
                }
            }`)
            .withGraphQLVariables({
                'episode': 'JEDI'
            })
            .expectStatus(201);
    });



});
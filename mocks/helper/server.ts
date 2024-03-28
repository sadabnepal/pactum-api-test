import { mock } from 'pactum';
import { like } from 'pactum-matchers';
import { fetchMockedPageResponseDataByFileName, fetchMockedUserResponseDataByFileName } from './fileHandler';

export const startServer = async (port: number, host: string) => {
    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/1' },
        response: { status: 200, body: fetchMockedUserResponseDataByFileName('1.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/2' },
        response: { status: 200, body: fetchMockedUserResponseDataByFileName('2.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/3' },
        response: { status: 200, body: fetchMockedUserResponseDataByFileName('3.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/4' },
        response: { status: 200, body: fetchMockedUserResponseDataByFileName('4.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/5' },
        response: { status: 200, body: fetchMockedUserResponseDataByFileName('5.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/6' },
        response: { status: 200, body: fetchMockedUserResponseDataByFileName('6.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/7' },
        response: { status: 200, body: fetchMockedUserResponseDataByFileName('7.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/8' },
        response: { status: 200, body: fetchMockedUserResponseDataByFileName('8.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/9' },
        response: { status: 200, body: fetchMockedUserResponseDataByFileName('9.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/10' },
        response: { status: 200, body: fetchMockedUserResponseDataByFileName('10.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/11' },
        response: { status: 200, body: fetchMockedUserResponseDataByFileName('11.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/12' },
        response: { status: 200, body: fetchMockedUserResponseDataByFileName('12.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users', queryParams: { page: 1 } },
        response: { status: 200, body: fetchMockedPageResponseDataByFileName('1.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users', queryParams: { page: 2 } },
        response: { status: 200, body: fetchMockedPageResponseDataByFileName('2.json') }
    });

    await mock.addInteraction({
        request: {
            method: 'POST',
            path: '/api/users',
            body: {
                name: like('test'),
                job: like('test')
            }
        },
        stores: {
            userName: 'req.body.name',
            userJob: 'req.body.job'
        },
        response: {
            status: 201,
            body: {
                name: '$S{userName}',
                job: '$S{userJob}',
                id: like(''),
                createdAt: like('')
            }
        }
    });

    await mock.start(port, host);
};


export const stopServer = async () => {
    await mock.stop();
};
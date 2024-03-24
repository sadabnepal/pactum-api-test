import { mock } from 'pactum';
import { fetchMockResponseDataByFileName } from './fileHandler';

export const startServer = async (port: number, host: string) => {
    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/1' },
        response: { status: 200, body: fetchMockResponseDataByFileName('1.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/2' },
        response: { status: 200, body: fetchMockResponseDataByFileName('2.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/3' },
        response: { status: 200, body: fetchMockResponseDataByFileName('3.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/4' },
        response: { status: 200, body: fetchMockResponseDataByFileName('4.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/5' },
        response: { status: 200, body: fetchMockResponseDataByFileName('5.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/6' },
        response: { status: 200, body: fetchMockResponseDataByFileName('6.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/7' },
        response: { status: 200, body: fetchMockResponseDataByFileName('7.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/8' },
        response: { status: 200, body: fetchMockResponseDataByFileName('8.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/9' },
        response: { status: 200, body: fetchMockResponseDataByFileName('9.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/10' },
        response: { status: 200, body: fetchMockResponseDataByFileName('10.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/11' },
        response: { status: 200, body: fetchMockResponseDataByFileName('11.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/12' },
        response: { status: 200, body: fetchMockResponseDataByFileName('12.json') }
    });

    await mock.start(port, host);
};


export const stopServer = async () => {
    await mock.stop();
};
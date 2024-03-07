import { mock } from 'pactum';
import { readFileSync } from 'fs';
import { join } from 'path';

const responseFolderPath = join(process.cwd(), 'mocks', 'response');

const getResponseByFileName = (fileName: string) => {
    return JSON.parse(readFileSync(join(responseFolderPath, fileName), { encoding: 'utf-8' }));
};

export const startServer = async (port: number, host: string) => {
    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/1' },
        response: { status: 200, body: getResponseByFileName('1.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/2' },
        response: { status: 200, body: getResponseByFileName('2.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/3' },
        response: { status: 200, body: getResponseByFileName('3.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/4' },
        response: { status: 200, body: getResponseByFileName('4.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/5' },
        response: { status: 200, body: getResponseByFileName('5.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/6' },
        response: { status: 200, body: getResponseByFileName('6.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/7' },
        response: { status: 200, body: getResponseByFileName('7.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/8' },
        response: { status: 200, body: getResponseByFileName('8.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/9' },
        response: { status: 200, body: getResponseByFileName('9.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/10' },
        response: { status: 200, body: getResponseByFileName('10.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/11' },
        response: { status: 200, body: getResponseByFileName('11.json') }
    });

    await mock.addInteraction({
        request: { method: 'GET', path: '/api/users/12' },
        response: { status: 200, body: getResponseByFileName('12.json') }
    });

    await mock.start(port, host);
};


export const stopServer = async () => {
    await mock.stop();
};
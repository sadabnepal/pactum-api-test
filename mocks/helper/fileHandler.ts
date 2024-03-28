import { readFileSync } from 'fs';
import { join } from 'path';

const fetchMockResponseDataByFileName = (folderName: string, fileName: string) => {
    const filePath = join(process.cwd(), 'mocks', 'stubs', folderName, fileName);
    const data = readFileSync(filePath, { encoding: 'utf8' });
    return JSON.parse(data);
};

export const fetchMockedUserResponseDataByFileName = (fileName: string) => {
    return fetchMockResponseDataByFileName('users', fileName);
};

export const fetchMockedPageResponseDataByFileName = (fileName: string) => {
    return fetchMockResponseDataByFileName('pages', fileName);
};
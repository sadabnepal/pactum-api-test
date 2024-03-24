import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export const fetchMockResponseDataByFileName = (fileName: string) => {
    const filePath = join(process.cwd(), 'mocks', 'response', fileName);
    if (!existsSync(filePath)) throw new Error(fileName + ' file does not exists in mock response folder');
    const data = readFileSync(filePath, { encoding: 'utf8' });
    return JSON.parse(data);
};
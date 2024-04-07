import { config } from 'dotenv';
import { join } from 'path';

const testEnv = (process.env.ENV || 'local').toLocaleLowerCase();

config({ path: join(process.cwd(), 'tests', 'env', `${testEnv}.env`) });

export const ENV = {
    BASE_URL: process.env.BASE_URL as string,
    HTTP_BIN_URL: process.env.HTTP_BIN_URL as string
};
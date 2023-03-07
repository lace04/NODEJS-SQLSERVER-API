import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;
export const DB_PORT = process.env.DB_PORT || 1433;
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USER = process.env.DB_USER || 'sa';
export const DB_PWD = process.env.DB_PWD || 'mypassword!#';
export const DB_NAME = process.env.DB_NAME || 'companydb';

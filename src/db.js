import {
  DB_PORT,
  DB_HOST,
  DB_USER,
  DB_PWD,
  DB_NAME,
} from './config.js'

export const slqConfig = {
  user: DB_USER,
  password: 'mypassword!#',
  database: DB_NAME,
  server: DB_HOST,
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, //for azure in true
  },
};

import {
  DB_PORT,
  DB_HOST,
  DB_USER,
  DB_PWD,
  DB_NAME,
} from './config.js'

export const slqConfig = {
  user: DB_USER,
  password: DB_PWD,
  database: DB_NAME,
  server: DB_HOST,
  port: DB_PORT,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, //for azure in true
  },
};

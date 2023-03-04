import { configure, getLogger } from 'log4js';

let appenders = ['console'];
let host = process.env.DEV_DOMAIN;
switch (process.env.EV_ENV) {
  case 'development':
    appenders = ['console'];
    break;
  case 'sit':
    appenders = ['console'];
    host = process.env.SIT_DOMAIN;
    break;
  case 'production':
    appenders = ['console'];
    host = process.env.PRD_DOMAIN;
    break;
  default:
    break;
}

configure({
  appenders: {
    console: { type: 'console' },
  },
  categories: {
    default: { appenders, level: 'debug' },
  },
});

export default getLogger();

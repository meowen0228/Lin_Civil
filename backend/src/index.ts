import 'reflect-metadata';
import * as dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import { AppDataSource } from './config/dataSource';
import { AppRoutes } from './routes';
import { Request, Response, NextFunction } from 'express';
import CheckToken from './middleware/CheckToken';
import CreateSaltPassword from './middleware/CreateSaltPassword';
import logger from './utils/logger/logger';

const PORT = process.env.PORT || '8080';

const initServer = async () => {
  try {

    logger.debug('create server ing...');

    try {
      // db config在typeorm0.3.0版之後一定要分開寫，不然cli要執行migration相關操作時會失敗
      await AppDataSource.initialize();
      logger.debug('connect DB success!');
    } catch (e) {
      logger.error('create database connection error, exit process.', e);
      process.exit();
    }

    const app = express();
    app.use(express.static('public'));
    app.use(bodyParser.json({ limit: '500mb' }));

    // cors
    const whitelist = [
      'http://localhost:8080',
      'http://localhost:3001',
      'http://localhost:4173',
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:3030',
      'http://52.194.76.222',
      'https://lin-civil.fly.dev',
      'https://lin-civil.tk/',
    ];
    app.use(cors({
      origin: (origin, callback) => {
        if (!origin || whitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true,
    }));

    // SHA256
    const SHA256 = (routePath: string[], middleware) => {
      return (req: Request, res: Response, next: NextFunction) => {
        if (routePath.includes(req.path)) {
          return middleware(req, res, next);
        } else {
          console.log(req.path);
          return next();
        }
      };
    };
    const SHA256List = ['/api/v1/login', '/api/v1/addUser'];
    app.use(SHA256(SHA256List, CreateSaltPassword));

    // token 驗證 排除的
    const unless = (routePath: string[], middleware) => {
      return (req: Request, res: Response, next: NextFunction) => {
        if (routePath.includes(req.path)) {
          console.log(req.path);
          return next();
        } else {
          return middleware(req, res, next);
        }
      };
    };
    const unlessList = ['/api/v1/login', '/api/v1/addUser'];
    app.use(unless(unlessList, CheckToken));

    // register routes
    AppRoutes.forEach((route) => {
      app[route.method](route.path, ...route.middlewares);
    });

    app.listen(PORT, () => {
      logger.info(`Listening on port: ${PORT}.`);
    });

  } catch (e) {
    logger.error('create database connection error, exit process.', e);
    process.exit();
  }
}

initServer();

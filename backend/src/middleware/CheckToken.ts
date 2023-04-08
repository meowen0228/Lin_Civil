import { Request, Response, NextFunction } from 'express';
import * as CustomsTools from './CustomsTools';
import { createClient } from 'redis';
import { IToken } from '../type';

const CheckToken = async (req: Request, res: Response, next: NextFunction) => {
  const data: IToken = {
    user_name: req.body.user_name ? req.body.user_name : req.query.user_name,
    token: req.body.token ? req.body.token : req.query.token,
  };
  if (!data.user_name || !data.token) {
    const result = CustomsTools.CodeStatus(400, 'no token');
    return res.json(result);
  }

  // redis
  const client = createClient({
    socket: {
      port: 6379,
      host: process.env.DB_HOST,
    },
  });
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();
  const redisToken = await client.get(data.user_name);

  if (redisToken !== null && redisToken === data.token) {
    delete req.body['user_name'];
    delete req.body['token'];
    next();
  } else {
    const result = CustomsTools.CodeStatus(400, 'token timeout');
    res.json(result);
  }
};

export default CheckToken;

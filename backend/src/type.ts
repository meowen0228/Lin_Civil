import { RequestHandler } from 'express';

export interface IRouteItem {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
  middlewares: RequestHandler[];
}

export interface ILogin {
  user_name: string;
  password: string;
}

export interface IToken {
  user_name: string;
  token: string;
}

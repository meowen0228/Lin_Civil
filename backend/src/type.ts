import { RequestHandler } from 'express';

export interface IRouteItem {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
  middlewares: RequestHandler[];
}

export interface ILogin {
  User_Name: string;
  Password: string;
}

export interface IToken {
  userName: string;
  token: string;
}

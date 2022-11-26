import { IRouteItem } from '../type';
import * as AccountController from '../controller/AccountController';

export const AccountRoutes: IRouteItem[] = [
  {
    path: '/api/v1/login',
    method: 'post',
    middlewares: [
      AccountController.login,
    ],
  },
  {
    path: '/api/v1/addUser',
    method: 'post',
    middlewares: [
      AccountController.addUser,
    ],
  },
];

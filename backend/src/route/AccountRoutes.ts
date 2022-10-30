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
];

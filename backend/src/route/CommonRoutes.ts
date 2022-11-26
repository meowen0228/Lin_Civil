import { IRouteItem } from '../type';
import * as CommonController from '../controller/CommonController';

export const CommonRoutes: IRouteItem[] = [
  {
    path: '/api/v1/getAllDataList',
    method: 'post',
    middlewares: [
      CommonController.getAllDataList,
    ],
  },
];

import { IRouteItem } from '../type';
import * as HorizontalBracingController from '../controller/HorizontalBracingController';

export const HorizontalBracingRoutes: IRouteItem[] = [
  {
    path: '/api/v1/getHorizontalBracingList',
    method: 'post',
    middlewares: [
      HorizontalBracingController.getHorizontalBracingList,
    ],
  },
  {
    path: '/api/v1/addHorizontalBracingList',
    method: 'post',
    middlewares: [
      HorizontalBracingController.addHorizontalBracingList,
    ],
  },
  {
    path: '/api/v1/delHorizontalBracingList',
    method: 'delete',
    middlewares: [
      HorizontalBracingController.delHorizontalBracingList,
    ],
  },
];

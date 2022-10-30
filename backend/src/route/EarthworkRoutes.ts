import { IRouteItem } from '../type';
import * as EarthworkController from '../controller/EarthworkController';

export const EarthworkRoutes: IRouteItem[] = [
  {
    path: '/api/v1/getEarthWorkList',
    method: 'get',
    middlewares: [
      EarthworkController.getEarthWorkList,
    ],
  },
  {
    path: '/api/v1/addEarthWorkList',
    method: 'post',
    middlewares: [
      EarthworkController.addEarthWorkList,
    ],
  },
  {
    path: '/api/v1/delEarthWorkList',
    method: 'delete',
    middlewares: [
      EarthworkController.delEarthWorkList,
    ],
  },
];

import { IRouteItem } from '../type';
import * as SteelAndFormController from '../controller/SteelAndFormController';

export const SteelAndFormRoutes: IRouteItem[] = [
  {
    path: '/api/v1/getSteelAndFormList',
    method: 'post',
    middlewares: [
      SteelAndFormController.getSteelAndFormList,
    ],
  },
  {
    path: '/api/v1/addSteelAndFormList',
    method: 'post',
    middlewares: [
      SteelAndFormController.addSteelAndFormList,
    ],
  },
  {
    path: '/api/v1/delSteelAndFormList',
    method: 'delete',
    middlewares: [
      SteelAndFormController.delSteelAndFormList,
    ],
  },
];

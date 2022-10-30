import { IRouteItem } from './type';
import { AccountRoutes } from './route/AccountRoutes';
import { EarthworkRoutes } from './route/EarthworkRoutes';

export const AppRoutes: IRouteItem[] = [
  ...AccountRoutes,
  ...EarthworkRoutes,
]

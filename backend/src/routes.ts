import { IRouteItem } from './type';
import { AccountRoutes } from './route/AccountRoutes';
import { EarthworkRoutes } from './route/EarthworkRoutes';
import { HorizontalBracingRoutes } from './route/HorizontalBracingRoutes';
import { SteelAndFormRoutes } from './route/SteelAndFormRoutes';

export const AppRoutes: IRouteItem[] = [
  ...AccountRoutes,
  ...EarthworkRoutes,
  ...HorizontalBracingRoutes,
  ...SteelAndFormRoutes
]

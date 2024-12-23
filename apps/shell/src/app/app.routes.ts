import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  // Add this route:
  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule('mfe-one', './module').then((m) => m.AppModule),
  },
  {
    path: 'one',
    loadComponent: () =>
      loadRemoteModule('mfe-one', './mfe-one-comp').then((m) => m.MfeOneCompComponent),
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule('mfe-one', './routes').then((m) => m.appRoutes),
  },
];

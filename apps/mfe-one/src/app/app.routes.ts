import { Route } from '@angular/router';
import { MfeOnComponent } from './components/mfe-on.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'mef-on', pathMatch: 'full' },
  {
    path: 'mef-on',
    loadComponent: () =>
      import('../app/components/mfe-on.component').then(
        (m) => m.MfeOnComponent
      ),
  },
];

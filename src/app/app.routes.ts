import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'base/login',
    pathMatch: 'full',
  },
  {
    path: 'base',
    loadComponent: () =>
      import('./layouts/base-layout/base-layout.component').then(
        (m) => m.BaseLayoutComponent
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./views/login/login.page').then((m) => m.LoginPage),
      },
    ],
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./layouts/app-layout/app-layout.component').then(
        (m) => m.AppLayoutComponent
      ),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./views/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'details',
        loadComponent: () =>
          import('./views/details/details.page').then((m) => m.DetailsPage),
      },
      {
        path: 'form',
        loadComponent: () =>
          import('./views/form/form.page').then((m) => m.FormPage),
      },
    ],
  },
];

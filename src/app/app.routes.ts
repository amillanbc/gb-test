import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/global-bank-components',
    pathMatch: 'full',
  },
  {
    path: 'base',
    loadComponent: () =>
      import('./layouts/base-layout/base-layout.component').then(
        m => m.BaseLayoutComponent
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./views/login/login.page').then(m => m.LoginPage),
      },
      {
        path: 'button',
        loadComponent: () =>
          import('./views/global-bank-components/button/button.page').then(
            m => m.ButtonPage
          ),
      },
      {
        path: 'input',
        loadComponent: () =>
          import('./views/global-bank-components/input/input.page').then(
            m => m.InputPage
          ),
      },
      {
        path: 'checkbox',
        loadComponent: () =>
          import('./views/global-bank-components/checkbox/checkbox.page').then(
            m => m.CheckboxPage
          ),
      },
      {
        path: 'toggle',
        loadComponent: () =>
          import('./views/global-bank-components/toggle/toggle.page').then(
            m => m.TogglePage
          ),
      },
      {
        path: 'popover',
        loadComponent: () =>
          import('./views/global-bank-components/popover/popover.page').then(
            m => m.PopoverPage
          ),
      },
      {
        path: 'typography',
        loadComponent: () =>
          import(
            './views/global-bank-components/typography/typography.page'
          ).then(m => m.TypographyPage),
      },
      {
        path: 'spacing',
        loadComponent: () =>
          import('./views/global-bank-components/spacing/spacing.page').then(
            m => m.SpacingPage
          ),
      },
      {
        path: 'colors',
        loadComponent: () =>
          import('./views/global-bank-components/colors/colors.page').then(
            m => m.ColorsPage
          ),
      },
      {
        path: 'icons',
        loadComponent: () =>
          import('./views/global-bank-components/icons/icons.page').then(
            m => m.IconsPage
          ),
      },
      {
        path: 'forms',
        loadComponent: () =>
          import('./views/global-bank-components/forms/forms.page').then(
            m => m.FormsPage
          ),
      },
      {
        path: 'modals',
        loadComponent: () =>
          import('./views/global-bank-components/modals/modals.page').then(
            m => m.ModalsPage
          ),
      },
      {
        path: 'select',
        loadComponent: () =>
          import('./views/global-bank-components/select/select.page').then(
            m => m.SelectPage
          ),
      },
    ],
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./layouts/app-layout/app-layout.component').then(
        m => m.AppLayoutComponent
      ),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./views/home/home.page').then(m => m.HomePage),
      },
      {
        path: 'details',
        loadComponent: () =>
          import('./views/details/details.page').then(m => m.DetailsPage),
      },
      {
        path: 'form',
        loadComponent: () =>
          import('./views/form/form.page').then(m => m.FormPage),
      },
      {
        path: 'global-bank-components',
        loadComponent: () =>
          import('./views/global-bank-components/main/main.page').then(
            m => m.MainPage
          ),
      },
    ],
  },
  {
    path: 'icons',
    loadComponent: () => import('./views/global-bank-components/icons/icons.page').then( m => m.IconsPage)
  },
];

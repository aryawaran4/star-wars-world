import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { Error404Component } from './pages/error-404/error-404.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/homepage',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: '**',
    component: Error404Component,
    loadChildren: () => import('./pages/error-404/error-404.module').then(m => m.Error404Module)
  },
];

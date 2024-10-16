import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component').then(mod => mod.DashboardComponent),
  },
  {
    path: 'explore',
    loadComponent: () => import('./features/explore/explore.component').then(mod => mod.ExploreComponent),
  },
  {
    path: 'learning',
    loadComponent: () => import('./features/learning/learning.component').then(mod => mod.LearningComponent),
  },
  {
    path: 'settings',
    loadComponent: () => import('./features/settings/settings.component').then(mod => mod.SettingsComponent),
  },
];

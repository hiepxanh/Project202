import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';
import { AuthGuard } from '../shared/guards/auth-guard.service'
import { CanDeactivateGuard } from '../shared/guards/can-deactivate-guard.service';

const DashboardRoutes: Routes = [
  {
    path: 'dashboard',

    children: [
      {
        path: '',
        canActivate: [AuthGuard,],
        component: DashboardComponent
      },
      {
        path:'users',
        component: DashboardUsersComponent,
        canActivateChild: [AuthGuard,],
        children: [
          {
            path: '',
            component: DashboardUsersHomeComponent,
          },
          {
            path:':username',
            component: DashboardUserDetailsComponent,
            canDeactivate: [CanDeactivateGuard]
          }
        ]
      }
    ]

   },

];

export const DashboardRouting: ModuleWithProviders = RouterModule.forChild(DashboardRoutes);

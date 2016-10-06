import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing'
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';
import {UserService} from '../shared/services/user.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRouting
  ],
  declarations: [
    DashboardComponent,
    DashboardUsersComponent,
    DashboardUsersHomeComponent,
    DashboardUserDetailsComponent
  ],
  providers: [
    UserService
  ]
})
export class DashboardModule { }

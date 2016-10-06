import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  templateUrl: 'app/dashboard/users/dashboard-users.component.html',
})
export class DashboardUsersComponent implements OnInit {
  users: User[];
  constructor(
    private service: UserService
  ) {  }

  ngOnInit() {
    this.service.getUsers().then(users => this.users = users);
  }
}

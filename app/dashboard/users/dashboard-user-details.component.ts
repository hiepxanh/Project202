import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'app/dashboard/users/dashboard-user-details.component.html',
})
export class DashboardUserDetailsComponent implements OnInit {
  user: User;
  editName: string;
  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {  }

  ngOnInit() {
    this.route.params.forEach( params => {
      let username = params['username'];

      this.service.getUser(username).then(user => {
        // console.log(user);
        // return this.user = user;
        this.user = user;
        this.editName = user.name;
      })
    });
    // let username = this.route.snapshot.params['username'];
    // this.service.getUser(username).then(user =>
    // {
    //   console.log(user);
    //   return this.user = user
    // }
    // );
  }

  save() {
    this.user.name = this.editName;
    this.router.navigate(['/dashboard/users']);

  }
  // dont save. navigate to dashboard/users
  cancel(){
    this.router.navigate(['/dashboard/users']);
  }

  canDeactivate() {
    console.log('I am navigating away');

    // if I'm editing but not have chance to save
    if (this.user.name !== this.editName) {
      return window.confirm ('Discard changes ?');
    }

    return true;
  }

}

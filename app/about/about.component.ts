import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { User } from '../shared/models/user';
// import { UserService } from '../shared/services/user.service';


@Component({
  selector: 'about-page',
  styles:[`
    .profile-card {
      background: #f3f3f3;
      border-radius: 4px;
      padding: 30px;
      text-align: center;
    }
    .profile-card img {
      max-width: 50%;
      margin: 15px auto;
    }
    `],
  templateUrl: 'app/about/about-page.component.html',
})
export class AboutComponent implements OnInit {
  users:User[];
  constructor(
              // private service: UserService,
              private route: ActivatedRoute
            ) {

              }

  ngOnInit() {
    // this.service.getUsers().then(users => this.users = users);

    this.route.data.forEach( (data: {users: User[]}) => this.users = data.users);
  }
}

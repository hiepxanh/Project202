import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user';


@Component({
  selector: 'about-user',
  styles:[`
    img {
      max-width:300px;
      margin: 20px auto;
    }
    `],
  templateUrl: 'app/about/about-user.component.html',
})


export class AboutUserComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {

    // // grab the current username
    // let username = this.route.snapshot.params['username'];
    // console.log(username);
    // // find in userslist a username that have user.username the same username ?
    // this.service.getUser(username).then(user => this.user = user);
    //
    // // this.user = users.find((user) => {
    // //   console.log(user);
    // //   return user.username === username ;
    // // })

    // no navigation, because we using resolve
    this.route.data.forEach( (data: {user: User}) => { this.user = data.user});
    

  }

  goBack() {
    // window.history.back();
    this.router.navigate(['/about']);
  }

}

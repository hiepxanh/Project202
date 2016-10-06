import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'
import {AboutComponent} from './about.component';
import {AboutUserComponent} from './about-user.component';
import {UserService} from '../shared/services/user.service';
import { aboutRouting } from './about.routing';
import { AboutSectionComponent } from './about-section.component';
import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from './about-user-resolve.service';
@NgModule({
  imports:[
    aboutRouting,
    CommonModule
  ],
  declarations: [
    AboutSectionComponent,
    AboutComponent,
    AboutUserComponent,
  ],
  providers: [
    UserService,
    AboutUsersResolve,
    AboutUserResolve
  ]
})

export class AboutModule {};

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {appRouting} from './app.routing';

// import {AboutModule} from './about/about.module';

import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {NotFoundComponent} from './not-found/not-found.component';

import { DashboardModule } from './dashboard/dashboard.module';

import { AuthGuard } from './shared/guards/auth-guard.service';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // AboutModule,
    appRouting,
    DashboardModule
   ],
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
   ],
   providers:[
     AuthGuard,
     CanDeactivateGuard
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

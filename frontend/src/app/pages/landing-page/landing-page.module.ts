import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPagePageRoutingModule } from './landing-page-routing.module';

import { LandingPagePage } from './landing-page.page';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { LandingPageComponent } from 'src/app/components/landing-page/landing-page.component';
// import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  providers:[
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPagePageRoutingModule,
 
  ],
  declarations: [
    LandingPagePage, 
    //LoginComponent,
    RegisterComponent,
    NavComponent,
    LandingPageComponent,
    // Geolocation
 
  ]
})
export class LandingPagePageModule {}

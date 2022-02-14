import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {LandingPageComponent } from '../components/landing-page/landing-page.component'
import { NavComponent } from '../components/nav/nav.component';
import { CarouselComponent } from '../components/carousel/carousel.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, NavComponent, CarouselComponent, LandingPageComponent]
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {LandingPageComponent } from '../components/landing-page/landing-page.component'
import { NavComponent } from '../components/nav/nav.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { ApplicationDetailsComponent } from '../components/application-details/application-details.component';
import { FooterComponent } from '../components/footer/footer.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, NavComponent, CarouselComponent, LandingPageComponent, ApplicationDetailsComponent, FooterComponent]
})
export class HomePageModule {}

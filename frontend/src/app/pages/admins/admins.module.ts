import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminsPageRoutingModule } from './admins-routing.module';

import { AdminsPage } from './admins.page';
import { AdminLandingComponent } from 'src/app/components/admin-landing/admin-landing.component';
import { NavComponent } from 'src/app/components/nav/nav.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminsPageRoutingModule
  ],
  declarations: [AdminsPage,
     AdminLandingComponent,
     NavComponent
    ]
})
export class AdminsPageModule {}

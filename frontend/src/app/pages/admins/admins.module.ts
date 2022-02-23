import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular';

import { AdminsPageRoutingModule } from './admins-routing.module';

import { AdminsPage } from './admins.page';
import { AdminLandingComponent } from 'src/app/components/admin-landing/admin-landing.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [AdminsPage,
     AdminLandingComponent,
     NavComponent,
     FooterComponent
    ]
})
export class AdminsPageModule {}

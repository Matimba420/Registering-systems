import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
  LoginPage,
  LoginComponent,
  RegisterComponent,
  NavComponent,
  FooterComponent
]
})
export class LoginPageModule {}

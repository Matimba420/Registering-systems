import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

import { FooterComponent } from 'src/app/components/footer/footer.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import  {HttpClientModule} from '@angular/common/http'

// import { RegisterComponent } from 'src/components/register/register.component';
import { NavComponent } from 'src/app/components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    RegisterPage,
    LoginComponent,
    NavComponent,
    FooterComponent
    // RegisterComponent
  ]
})
export class RegisterPageModule {}

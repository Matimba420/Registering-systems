import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

import { FooterComponent } from 'src/components/footer/footer.component';
import { LoginComponent } from 'src/components/login/login.component';
import  {HttpClientModule} from '@angular/common/http'

// import { RegisterComponent } from 'src/components/register/register.component';

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
    // RegisterComponent
  ]
})
export class RegisterPageModule {}

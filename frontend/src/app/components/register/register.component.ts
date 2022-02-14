import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CrudService } from '../se/register.service'; 
import { RegisterService } from 'src/app/services/register.service';
import { AlertController } from '@ionic/angular';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor( private registerservice: RegisterService, private formBuilder: FormBuilder, public alertController: AlertController){}
  //Add user form actions
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Great!!',
      message: 'User has been registered.',
      buttons: ['OK']
    });
    await alert.present();
    
  }
  get registerValidation() { return this.registerForm.controls; }
  onSubmit() {
  
     this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      
      // Initialize Params Object
      var myFormData = new FormData();
    
    // Begin assigning parameters
    
        // myFormData.append('fullName', this.registerForm.value.fullName);
        // myFormData.append('empno', this.registerForm.value.empno);
        // myFormData.append('email', this.registerForm.value.email);
     
        console.log("form ", this.registerForm.value);
        
       
        // this.registerservice.adduser(this.registerForm.value); //calling add user service
        // this.presentAlert();
        
    }
  
  }
    ngOnInit() {
      //Add User form validations
      this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      empno: ['', [Validators.required,]],
      password: ['', [Validators.required]]
      });
    }
    
  
}

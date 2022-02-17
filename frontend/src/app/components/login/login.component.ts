import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  loginFormEmp: FormGroup;
  loginFormAdmin: FormGroup;
  
  submitted = false;
  constructor( private userService: UserService, private formBuilder: FormBuilder, public alertController: AlertController){}
 
  get registerValidation() { return this.loginFormEmp.controls; }
  get registerValidationAdmin() { return this.loginFormEmp.controls; }

  onSubmitEmp() {
    this.submitEmp();
  
     this.submitted = true;
    // stop here if form is invalid
    if (this.loginFormEmp.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      
      // Initialize Params Object
      var myFormData = new FormData();
     
        console.log("form ", this.loginFormEmp.value); 

        
    };

    
  
  }

  onSubmitAdmin() {
    this.submitAdmin();
  
     this.submitted = true;
    // stop here if form is invalid
    if (this.loginFormEmp.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      
      // Initialize Params Object
      var myFormData = new FormData();
     
        console.log("form ", this.loginFormEmp.value);
        
        

        
    }
  
  }

    ngOnInit() {

      // this.passwordMatch();
      //Add User form validations
      this.loginFormEmp = this.formBuilder.group({
      email: ['', [Validators.compose([Validators.required, Validators.email])]],
      password: ['', [Validators.required]]
      });

      this.loginFormAdmin = this.formBuilder.group({
        emailAdmin: ['', [Validators.compose([Validators.required, Validators.email])]],
        passwordAdmin: ['', [Validators.required]]
        });
    }

    fieldsWithDataEmp(): boolean{
      if(this.loginFormEmp.value.email && this.loginFormEmp.value.password != "" ){
        // this.messages();
        return true;
      }
      else{
        return false;
      }
      
    }

    fieldsWithDataAdmin(): boolean{
      if(this.loginFormAdmin.value.emailAdmin && this.loginFormAdmin.value.passwordAdmin != "" ){
        // this.messages();
        return true;
      }
      else{
        return false;
      }
      
    }
  //EMPLOYEE
    submitEmp(): void{
      // return console.log(this.myForm.value)
      if(this.fieldsWithDataEmp()) {
        // this.messages();
        this.userService.login(this.loginFormEmp.value)
        .subscribe(res => {
          alert("Successfully logged!!");
            sessionStorage.setItem("emp_id", JSON.stringify(res));
            localStorage.setItem("emp_id", JSON.stringify(res));
          console.log(res);
          window.location.href = "/landingpage";
        }, err =>{
          alert(err+ "Login failed check console");
          
        });  
      }  
      
    }
    //admin
    submitAdmin(): void{
      // return console.log(this.myForm.value)
      if(this.fieldsWithDataAdmin()) {
        // this.messages();
        this.userService.loginAdmin(this.loginFormAdmin.value)
        .subscribe(res => {
          alert("Successfully logged!!");
            // sessionStorage.setItem("emp_id", JSON.stringify(res));
            localStorage.setItem("emp_id", JSON.stringify(res));
          console.log(res);
          window.location.href = "/admins";
        }, err =>{
          alert(err+ "Login failed check console");
          
        });  
      }  
      
    }
    
  
}

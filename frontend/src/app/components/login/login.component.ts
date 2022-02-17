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
        console.log(this.loginFormEmp.value);
        this.userService.login(this.loginFormEmp.value)
        .subscribe(res => {
          if(res.toString().length > 0){
            console.log(res)
            alert("Successfully logged!!");
            sessionStorage.setItem("emp_id", JSON.stringify(res));
            localStorage.setItem("emp_id", JSON.stringify(res));
          console.log(res);
          window.location.href = "/landingpage";
          }
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
        this.userService.logInAdmin(this.loginFormAdmin.value)
        .subscribe(res => {
          if(res) {
            console.log(this.loginFormAdmin.value)
            alert("Successfully logged!!");
            sessionStorage.setItem("admin_id", JSON.stringify(res));
            localStorage.setItem("admin_id", JSON.stringify(res));
          console.log(res);
          window.location.href = "/admins";
          }
        }, err =>{
          alert(err+ "Login failed check console");
          
        });  
      }  
      
    }
    
  
}

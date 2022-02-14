import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: any = '';
  isMessage: boolean = false;
  passwordMessage: any = '';
  password_matched: boolean = false;
  submitted = false;
  constructor( private userService: UserService, private formBuilder: FormBuilder, public alertController: AlertController){}
  //Add user form actions
  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Great!!',
  //     message: 'User has been registered.',
  //     buttons: ['OK']
  //   });
  //   await alert.present();
    
  // }
  get registerValidation() { return this.loginForm.controls; }
  onSubmit() {
    this.submit();
  
     this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      
      // Initialize Params Object
      var myFormData = new FormData();
    
    // Begin assigning parameters
    
        // myFormData.append('fullName', this.loginForm.value.fullName);
        // myFormData.append('empno', this.loginForm.value.empno);
        // myFormData.append('email', this.loginForm.value.email);
     
        console.log("form ", this.loginForm.value);
        
        
       
        // this.userservice.adduser(this.loginForm.value); //calling add user service
        // this.presentAlert();
        
    }
  
  }
    ngOnInit() {

      // this.passwordMatch();
      //Add User form validations
      this.loginForm = this.formBuilder.group({
      email: ['', [Validators.compose([Validators.required, Validators.email])]],
      password: ['', [Validators.required]]
      });
    }

    fieldsWithData(): boolean{
      if(this.loginForm.value.email && this.loginForm.value.password != "" ){
        // this.messages();
        return true;
      }
      else{
        return false;
      }
      
    }
  
    messages(): void {
      if(this.fieldsWithData()){
        this.message = "";
      }
      else{
        this.message = "Fields cannot be empty"
      }
       
    }
  
    submit(): void{
      // return console.log(this.myForm.value)
      if(this.fieldsWithData()) {
        this.messages();
        this.userService.register(this.loginForm.value)
        .subscribe(res => {
          alert("Successfully registered!!");
          window.location.href = "/login";
            sessionStorage.setItem("user_id", JSON.stringify(res));
          console.log(res)
        }, err =>{
          // alert(err+ "Login failed check console");
          
        });  
      }
     
      
    }
    
  
}

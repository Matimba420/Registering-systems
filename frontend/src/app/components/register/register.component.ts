import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CrudService } from '../se/register.service'; 
import { UserService } from '../../services/user.service'
import { AlertController } from '@ionic/angular';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  message: any = '';
  isMessage: boolean = false;
  passwordMessage: any = '';
  password_matched: boolean = false;
  submitted = false;
  constructor( private userService: UserService, private formBuilder: FormBuilder, public alertController: AlertController){}
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
    this.submit();
  
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
        
        
       
        // this.userservice.adduser(this.registerForm.value); //calling add user service
        this.presentAlert();
        
    }
  
  }
    ngOnInit() {

      // this.passwordMatch();
      //Add User form validations
      this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      emp_id: ['', [Validators.required,]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
      });
    }

    passwordMatch(): boolean {
      if(this.registerForm.value.confirm_password === this.registerForm.value.password){

        console.log("This works")
        return true;
      }
      else{
        console.log("This doesn works")
        this.passwordMessage = "Passwords do not match";
        return false;
      }
    }
    fieldsWithData(): boolean{
      if((this.registerForm.value.name && this.registerForm.value.email) && (this.registerForm.value.password && this.registerForm.value.confirm_password) != "" ){
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
      if(this.passwordMatch()) {
        this.messages();
        this.userService.register(this.registerForm.value)
        .subscribe(res => {
          alert("Successfully registered!!");
          window.location.href = "/login";
            sessionStorage.setItem("emp_id", JSON.stringify(res));
            localStorage.setItem("emp_id", JSON.stringify(res));
          console.log(res)
        }, err =>{
          alert(err+ "Login failed check console");
          
        });  
      }
     
      
    }
    
  
}

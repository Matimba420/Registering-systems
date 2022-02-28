import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { NavComponent } from '../nav/nav.component';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ipAddress: any;
  
  constructor( private userService: UserService,
     private httpClient: HttpClient,private formBuilder: FormBuilder, public alertController: AlertController, private nativeStorage : NativeStorage){}

  submitted = false;
  isEmpAdmin = false;
  myForm: FormGroup;
  myNewForm: FormGroup;
  haveData: boolean = false;
  buttValue: boolean;
  message: any = '';
  strongRegex = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})");

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
      

    });

    this.myNewForm = new FormGroup({
      userType: new FormControl('')
    })

    this.messages();
    this.getIPAddress()
  }

  messages(): void{

    if(!this.fieldsWithData()){
      this.message = "Fields can't be empty";
    }
    else{
      this.message = "";
    }
  }
  fieldsWithData(): boolean{
    if(this.myForm.value.email && this.myForm.value.password !== ""){
      this.haveData = true;
    }
    else{
      this.haveData = false;
    }
    return this.haveData;

  }

  submitEmp(): void{
    let varr = this.getIPAddress();

    if(varr == '154.0.14.211'){
      if(this.fieldsWithData()) {
        this.userService.login(this.myForm.value)
        .subscribe(res => {
          if(Object.keys(res).length > 0) {
            console.log(this.myForm.value)
            console.log(res);
          
            alert("Successfully logged!!");
            sessionStorage.setItem("emp_id", JSON.stringify(res));
            localStorage.setItem("emp_id", JSON.stringify(res));
            this.nativeStorage.setItem("emp_id", JSON.stringify(res)).then(
              () => console.log('Stored item!'),
              error => console.error('Error storing item', error)
            );
          console.log(res);
          window.location.href = "/landingpage";
          }
          else {
            alert("Wrong email/password entered")
          }
        }, err =>{
          alert(err+ "Login failed check console");
  
        });
      }
    }else{
      alert('you are not at DA')
    }
   

  }
  submitAdmin(): void{
    if(this.fieldsWithData()) {
      this.userService.logInAdmin(this.myForm.value)
      .subscribe(res => {
        if(Object.keys(res).length > 0) {
          console.log(this.myForm.value)
          alert("Successfully logged!!");
          sessionStorage.setItem("admin_id", JSON.stringify(res));
          localStorage.setItem("admin_id", JSON.stringify(res));
          this.nativeStorage.setItem("admin_id", JSON.stringify(res)).then(
            () => console.log('Stored item!'),
            error => console.error('Error storing item', error)
          );
        console.log(res);
        window.location.href = "/admins";
        }
        else {
          alert("Wrong email/password entered")
        }
      }, err =>{
        alert(err+ "Login failed check console");

      });
    }
  }

  isWorkingAdmin(): boolean{

    if(this.myNewForm.value.userType == 'admin'){
      return this.buttValue = true;
    }
    
  }
  isWorkingEmp(): boolean{

    if(this.myNewForm.value.userType == 'employee'){
      return this.buttValue = true;
    }
    
  }
  getIPAddress(){
    this.httpClient.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;
      console.log(this.ipAddress);
    });
    return this.ipAddress;
  }

  empAdminEvaluation(): void {
    if(this.myNewForm.value.userType == 'admin'){
      this.submitAdmin();
      this.isEmpAdmin = true
    }
    else if(this.myNewForm.value.userType == 'employee'){
      this.submitEmp();
      this.isEmpAdmin = true;
    }
    
  }

  
}

 

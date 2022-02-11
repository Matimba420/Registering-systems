import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private formBuilder: FormBuilder) 
  {
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {

    
  }


  loign()
  {
      console.log(this.loginForm.value);
      console.log("login pressed");
      
      
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private nativeStorage: NativeStorage) { }

  ngOnInit() {
  }

}

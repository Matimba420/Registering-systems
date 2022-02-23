import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  sessionTrue: boolean = false;
  location: any;
  
  getStorage(): boolean{

  if(localStorage.getItem("admin_id") || sessionStorage.getItem("admin_id")) {
    this.sessionTrue = true;
    this.location = "/admins";
    window.location.href = "/admins";
  }
  else{
    this.sessionTrue = false;
  }
  
  if(localStorage.getItem("emp_id") || sessionStorage.getItem("emp_id")) {
    this.sessionTrue = true;
    this.location = "/landingpage";
    window.location.href = "/landingpage";
  }
  else{
    this.sessionTrue = false;
  }



    return this.sessionTrue;
  }
  isTrues(): boolean{
    return this.sessionTrue;
  }

  goBack(): void {
    window.history.back();
  }

}
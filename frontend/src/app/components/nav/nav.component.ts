import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  constructor() { }
  sessionTrue: boolean = false;

  ngOnInit() {

  if(sessionStorage.getItem("emp_id")) {
    this.sessionTrue = true;
  }
}

clearSession(): void {
  sessionStorage.removeItem("emp_id");
  alert("Logged out!");
  window.location.href = "/";
}

}

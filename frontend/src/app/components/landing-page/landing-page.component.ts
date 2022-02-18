import { Component, OnInit } from '@angular/core';
import {AttendanceService} from '../../services/attendance.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  emp_name: any;
  name: any;
  attendResponse: any;
  id: any;

  

  newDate: String = new Date().toISOString();
  

  constructor(private attendanceService: AttendanceService) { }

  allEmployees: any;

  ngOnInit() {
    this.getAllOneId();
  }

  getAllOneId() {
    this.emp_name = JSON.parse(sessionStorage.getItem("emp_id"));
    this.id = this.emp_name[0].emp_id;
    this.name = this.emp_name[0].name;
    this.attendanceService.getAllOneId(this.id).
    subscribe(res => {
      console.log(res);
      this.attendResponse = res;
    },err => {console.log(err);
    }
    );
  }

}

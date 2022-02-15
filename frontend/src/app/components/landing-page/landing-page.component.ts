import { Component, OnInit } from '@angular/core';
import {AttendanceService} from '../../services/attendance.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  constructor(private attendanceService: AttendanceService) { }

  allEmployees: any;
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.attendanceService.getAll().
    subscribe(res => {
      if(res.data){
        console.log(res.data)
      this.allEmployees = res.data;
      }
      else
      {
        console.log("error")
      }
      
    },err => {console.log(err);
    });
  }

}

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
      if(res){
        console.log(res)
      this.allEmployees = res;
      }
      else
      {
        console.log("error")
      }
      
    },err => {console.log(err);
    });
  }

}

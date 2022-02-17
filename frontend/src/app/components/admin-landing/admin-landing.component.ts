import { Component, OnInit } from '@angular/core';
import { AttendanceService} from '../../services/attendance.service';
import { ReactiveFormsModule } from '@angular/forms'
@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss'],
})
export class AdminLandingComponent implements OnInit {

  constructor(private attendanceService:AttendanceService) { }

  attendResponse: any = []
  ngOnInit() {
    this.getAll();
    
  }
  getAll(): void {
    this.attendanceService.getAll().subscribe(res =>{
      console.log(res);
      this.attendResponse = res;
    },err=>{
      alert(err+" Something went wrong retrieving data")
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AttendanceService} from '../../services/attendance.service';
import { ReactiveFormsModule } from '@angular/forms'
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss'],
})
export class AdminLandingComponent implements OnInit {

  public searchField: FormControl;
  returnValue: any;

  constructor(private attendanceService:AttendanceService) { 

    this.searchField = new FormControl('');
  }

  attendResponse: any = [];
  admin_name: any;
  name: any;
  ngOnInit() {
    this.getAll();
    // this.search();

  }
  
  getAll(): void {
    this.attendanceService.getAll().subscribe(res =>{
      console.log(res);
      this.attendResponse = res;
    },err=>{
      alert(err+" Something went wrong retrieving data")
    });

    this.admin_name = JSON.parse(localStorage.getItem("admin_id"));
    this.name = this.admin_name[0].admin_name;
  }

  ionChange(event) {
    console.log(event.detail.value)

    console.log(this.search(event));
}
  search(event): String {
    for(let x = 0; x < this.attendResponse.length; x++){
    if(event.detail.value = this.attendResponse[x].name){
      this.attendResponse[0] = this.attendResponse[x];
      return this.attendResponse;
    }
  }

  
  }
}

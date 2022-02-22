import { Component, OnInit } from '@angular/core';
import { AttendanceService} from '../../services/attendance.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss'],
})
export class AdminLandingComponent implements OnInit {

  public searchField: FormControl;
  returnValue: any;
  attendResponse: any = [];
  searchResponse: any = [];
  searchResponseLength: any
  admin_name: any;
  name: any;

  constructor(private attendanceService:AttendanceService, private router:Router, private excelService:ExcelService) { 

    this.searchField = new FormControl('');
  }

route(): void {
  this.router.navigate(['/history'], {queryParams: {emp_id: this.searchResponse.emp_id}})
}

  ngOnInit() {
    this.getAll();
    // this.search();

  }
  
  getAll(): void {
    // if(){
    this.attendanceService.getAll().subscribe(res =>{
      console.log(res);
      this.attendResponse = res;
    },err=>{
      alert(err+" Something went wrong retrieving data")
    });

    this.admin_name = JSON.parse(localStorage.getItem("admin_id"));
    this.name = this.admin_name[0].admin_name;
  // }
  }

  ionChange(event) {
    console.log(event.detail.value)

    console.log(this.search(event));
}
  search(event): String {
    for(let x = 0; x < this.attendResponse.length; x++){
    if(event.detail.value == this.attendResponse[x].name){
      console.log(this.attendResponse[x].name)
      this.searchResponse = this.attendResponse[x];
      return this.searchResponse;
    }
  }
  
  }

  issearchResponse(): boolean {
    
    if(this.searchResponse != ""){
      return true;
    }
    else{
      return false;
    }

  }

  goBack(): void {
    window.history.back();
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.attendResponse, 'employee_data');
  }
}

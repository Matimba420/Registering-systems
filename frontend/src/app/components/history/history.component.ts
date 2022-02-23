import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttendanceService } from 'src/app/services/attendance.service';
import { ExcelService } from 'src/app/services/excel.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  constructor(private attendanceService: AttendanceService, private activatedRoute: ActivatedRoute, private excelService:ExcelService, private ng2SearchPipeModule: Ng2SearchPipeModule, private locationApi: LocationService) { 
    
    this.activatedRoute.queryParams.subscribe(data => {
      console.log(data.emp_id);
      this.fromRouter = data.emp_id;
    })
  }

  history: any = [];
  fromRouter: any;
  name: any;
  latitude: any;
  longitude: any;
  myLocation:any;
  filterTerm: any;

  ngOnInit() {
    this.userHistory();
    this.latitude = localStorage.getItem("Latitude")
  this.longitude = localStorage.getItem("Longitude")

  console.log( "lat"+ this.latitude + " long : " + this.longitude);

  this.locationApi.getLocation(this.latitude,this.longitude).subscribe((res:any)=>{
    this.myLocation = res.features[0].properties.formatted
    });
    
  }

  userHistory(): void {

    this.attendanceService.getAllOneId(this.fromRouter).subscribe(res =>{
      this.history = res;
      this.name = this.history[0].name;
    },err =>{
      console.log(err)
    });
  }

  goBack(): void {
    window.history.back();
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.history, 'employee_data');
  }
}

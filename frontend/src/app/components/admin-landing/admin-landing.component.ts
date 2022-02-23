import { Component, OnInit } from '@angular/core';
import { AttendanceService} from '../../services/attendance.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ExcelService } from 'src/app/services/excel.service';
import { LocationService } from 'src/app/services/location.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
  latitude: any;
  longitude: any;
  myLocation:any;
  filterTerm: string;

  constructor(private attendanceService:AttendanceService, private router:Router, private excelService:ExcelService, private locationApi: LocationService, private ng2SearchPipeModule: Ng2SearchPipeModule) { 

    this.searchField = new FormControl('');
  }

route(): void {
  this.router.navigate(['/history'], {queryParams: {emp_id: this.searchResponse.emp_id}})
}

  ngOnInit() {
    this.getAll();
    // this.search();

    this.latitude = localStorage.getItem("Latitude")
  this.longitude = localStorage.getItem("Longitude")

  console.log( "lat"+ this.latitude + " long : " + this.longitude);

  this.locationApi.getLocation(this.latitude,this.longitude).subscribe((res:any)=>{

    this.myLocation = res.features[0].properties.formatted
    });

  }
  
  getAll(): void {
    // if(){
    this.attendanceService.getAll().subscribe(res =>{
      console.log(res);
      this.attendResponse = res;
      this.sortingArr()
      
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

sortingArr(): void{

  const sortArr =  this.attendResponse.sort((a, b)=> +new Date(a.created_at) - +new Date(b.created_at))
  console.log(this.attendResponse[0].created_at)
  let day = this.attendResponse[0].created_at.substring(8,10)
  let month = this.attendResponse[0].created_at.substring(5,7)
  let year = this.attendResponse[0].created_at.substring(0,4)
  console.log("the date is " + day + "/" + month + "/" + year);
  day = Number(day) + 7;
  if(day >= 31 || day >= 30){
    month = Number(month) + 1
    day = day - 30;

  }
  console.log("the new (by week) date is " + day + "/" + month + "/" + year);
  month = 14
  if(month > 12){
    month = month - 12
    year = Number(year) + 1

  }
  console.log("the new (by year) date is " + day + "/" + month + "/" + year);
  

  console.log(sortArr)


}
//  sortByEmp_id( a, b ) {
//   if ( a.emp_id < b.emp_id ){
//     return -1;
//   }
//   if ( a.emp_id > b.emp_id ){
//     return 1;
//   }
//   return 0;
  
// }


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

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

  constructor(private attendanceService:AttendanceService) { 
    
    this.searchField = new FormControl('');
  }

  attendResponse: any = [];
  admin_name: any;
  name: any;
  ngOnInit() {
    this.getAll();

  }

  save(): void {
    // let finalCSV = this.name.value+','+this.school.value;
    // alert('finalCSV');
    //  $cordovaFile.writeFile(cordova.file.externalRootDirectory, 'data.csv', finalCSV, true).then(function(result){
    //        alert('Success! Export created!');
    //      }, function(err) {
    //        console.log("ERROR");
    //      })let finalCSV = this.name.value+','+this.school.value;
    // alert('finalCSV');
    //  $cordovaFile.writeFile(cordova.file.externalRootDirectory, 'data.csv', finalCSV, true).then(function(result){
    //        alert('Success! Export created!');
    //      }, function(err) {
    //        console.log("ERROR");
    //      })

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

  search(): void {

    // if(this.attendResponse.    ){}
    // returnValue =
    
  }
}

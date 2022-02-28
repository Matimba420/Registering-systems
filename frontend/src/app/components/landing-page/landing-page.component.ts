import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {AttendanceService} from '../../services/attendance.service';
import { LocationService } from 'src/app/services/location.service';
// import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  emp_name: any;
  subStrDate: any;
  name: any;
  attendResponse: any = [];
  id: any;
  length: any;
  signInWithTempForm: FormGroup;
  newDate: String = new Date().toISOString();
  buttonNotWork: boolean = false;
  ipAddress: any;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private httpClientModule : HttpClientModule,private attendanceService: AttendanceService, private locationApi: LocationService) { }
  

  allEmployees: any;
  latitude: any;
  longitude: any;
  myLocation:any;


 ngOnInit() {
  this.getAllOneId();

  this.latitude = localStorage.getItem("Latitude")
  this.longitude = localStorage.getItem("Longitude")

  console.log( "lat"+ this.latitude + " long : " + this.longitude);

  this.locationApi.getLocation(this.latitude,this.longitude).subscribe((res:any)=>{

    this.myLocation = res.features[0].properties.formatted
  
  });
  

  
   
    this.subStrDate = this.newDate.substring(0,10)

    this.signInWithTempForm = this.formBuilder.group({
      temperature: [''],
      haveCovid: ['']
      });
  }


  sendForm(): void{
    let temperature = {emp_id: this.id, temperature: this.signInWithTempForm.value.temperature, haveCovid: this.signInWithTempForm.value.haveCovid}
    console.log(this.signInWithTempForm.value.haveCovid);
    
    if(this.signInWithTempForm.value.haveCovid == "yes"){
      alert("Please visit your nearest doctor for a Covid-19 test");
    }
    else if(this.signInWithTempForm.value.haveCovid == "no"){
      alert("Successfully clogged in! Let get great dev done!");
    }
      this.attendanceService.attend(temperature).
    subscribe(res =>{
      console.log(res);
    }, err=>{
      console.log(err);
    });
    window.location.href = "/landingpage";
  }

  getAllOneId(): void {
    this.emp_name = JSON.parse(sessionStorage.getItem("emp_id"));
    this.id = this.emp_name[0].emp_id;
    this.name = this.emp_name[0].name;
    this.attendanceService.getAllOneId(this.id).
    subscribe(res => {
      this.attendResponse = res;
      console.log(this.attendResponse);
      this.length = this.attendResponse.length;
      console.log(this.length)
      for(let i = 0; i < this.length; i++) {
      console.log(this.attendResponse[i].created_at.substring(0,10));

      if(this.attendResponse[i].created_at.substring(0,10) == this.subStrDate){
        this.buttonNotWork = true
      }
    }
    },err => {
      console.log(err);
    }
    );
  }

  goBack(): void {
    window.history.back();
  }

 
}

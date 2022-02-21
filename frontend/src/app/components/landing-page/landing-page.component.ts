import { Component, OnInit } from '@angular/core';
import {AttendanceService} from '../../services/attendance.service';
import { LocationService } from 'src/app/services/location.service';
// import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http';

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

  constructor(private httpClientModule : HttpClientModule,private attendanceService: AttendanceService, private locationApi: LocationService) { }

  allEmployees: any;
  latitude: any;
  longitude: any;
  myLocation:any;


 ngOnInit() {

  this.latitude = localStorage.getItem("Latitude")
  this.longitude = localStorage.getItem("Longitude")

  console.log( "lat"+ this.latitude + " long : " + this.longitude);

  this.locationApi.getLocation(this.latitude,this.longitude).subscribe((res:any)=>{
    // console.log(res.features[0].properties.formatted);

    this.myLocation = res.features[0].properties.formatted
  });
  

  
    this.getAllOneId();
    // this.currentLocation();
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
  // currentLocation(): void
  //  {
  //   this.geolocation
  //     .getCurrentPosition()
  //     .then((resp) => {
  //       this.latitude = resp.coords.latitude;
  //       this.longitude = resp.coords.longitude;

  //       console.log(resp);

  //       let location;
  //       let houseNumber;

  //       //Returns this to the service
  //       this.locationApi
  //         .getLocation(this.latitude, this.longitude)
  //         .subscribe((res) => {
  //           console.log(res);

  //           location = res.features[0].properties.formatted;
  //           (houseNumber = res.features[0].properties.housenumber),
  //             alert(location);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log('Error getting location', error);
  //     });

  //   let watch = this.geolocation.watchPosition();

  //   console.log(watch);

  //   watch.subscribe((data) => {});
  // }



}

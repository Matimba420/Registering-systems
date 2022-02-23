import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  async get_Lon_Lat(){

    let location ={
       lat: '',
       lng: ''

    }
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          location.lat = position.coords.latitude;
          location.lng = position.coords.longitude;
          localStorage.setItem("Latitude",position.coords.latitude)
          localStorage.setItem("Longitude",position.coords.longitude)
        }
      },
        (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }



    return location;
  }

  getLocation(lat: any, lon: any) {
    return this.http.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=92150486779346a4b3cf2edbf210e21a`)
  }
}
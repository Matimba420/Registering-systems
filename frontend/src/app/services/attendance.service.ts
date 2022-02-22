import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../interfaces/employee';
import { Temperature } from '../interfaces/temperature';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http:HttpClient) { }

  getAllOneId(emp_id: String) {
    return this.http.get(`${environment.backend}/attendance/getAllOneId/`+emp_id)
  }
  getAll(): Observable<any>{
    return this.http.get<Employee[]>(`${environment.backend}/attendance/getAll`);
  }
  attend(temperature : Temperature) {
    return this.http.post(`${environment.backend}/attendance/attend/${temperature.emp_id}/${temperature.temperature}/${temperature.haveCovid}`, temperature);
  }
}

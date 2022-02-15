import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../interfaces/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http:HttpClient) { }

  getAllOneId(employee : Employee) {
    return this.http.post('http://localhost:3100/attendance/getById', employee)
  }
  getAll(): Observable<any>{
    return this.http.get<Employee[]>(`http://localhost:3100/attendance/getAll`);
  }
  attend(employee : Employee) {
    return this.http.post('http://localhost:3100/attendance/attend', employee);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData:any;
constructor(private http:HttpClient) { }

    getAll() {
        return this.http.get<Employee[]>(`/employees`);
    }

    register(employee: Employee) {
        return this.http.post('http://localhost:3100/register', employee);
    }

    signin(employee: Employee) {
      return this.http.post('http://localhost:3100/signin', employee);
  }

}

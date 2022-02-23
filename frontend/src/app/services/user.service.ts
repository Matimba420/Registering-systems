import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';
import { environment } from 'src/environments/environment';

const baseURL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http:HttpClient) { }


    getAll() {
        return this.http.get<Employee[]>(`/employees`);
    }

    register(employee: Employee) {
        return this.http.post(`${baseURL}/user/register`, employee);
    }

    login(employee: Employee) {
      return this.http.post(`${baseURL}/user/login`, employee);
  }

  logInAdmin(employee: Employee) {
    return this.http.post(`${baseURL}/user/logInAdmin`, employee);
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
//   private BASE_URL = 'http://localhost:3100/users/register'
//   constructor(private http:HttpClient) { }
//   //////////
//   getAllUsers(): Observable<Register[]> {
//     return this.http.get<Register[]>(this.BASE_URL)
//   };
//   //////////
//   addUser(data:any): Observable<Register>{
//     return this.http.post<Register>(this.BASE_URL,data);
//   }
// }

userData:any;
constructor(private http:HttpClient) { }

//add new user    
// public adduser(userData)
// {
//   return this.http.post('http://localhost:3100/employees/register'
// , userData).subscribe((res: Response) => {
 
// });
// }

    getAll() {
        return this.http.get<Employee[]>(`/users`);
    }

    register(employee: Employee) {
        return this.http.post('http://localhost:3100/register', employee);
    }

    signin(employee: Employee) {
      return this.http.post('http://localhost:3100/signin', employee);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  register(username:string,name:string,email:string,phone:BigInteger,password:string):Observable<any>{
    return this.http.post('https://localhost:7063/api/auth/register',{username,name,email,phone,password})
  }
}

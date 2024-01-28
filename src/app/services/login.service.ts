import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token! : string
  constructor(private http:HttpClient) { }

  login(Username:string,Password:string):Observable<any>{
    return this.http.post('https://localhost:7063/api/Auth/login',{Username,Password}).pipe(
      tap((user : any) => {
        this.token = user.message
        localStorage.setItem("token" , this.token);
      })
    )
  }
}

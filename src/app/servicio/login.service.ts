import { Injectable } from '@angular/core';
//import { Authenticate } from '@demo-app/data-models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private showLogin: boolean = true;

  constructor(private httpClient: HttpClient) { }

  login(user: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/login', user);
  }
  prueba(): Observable<any> {
    return this.httpClient.get('https://gorest.co.in/public/v1/users');
  }
  getShowLogin(){
    return this.showLogin;
  }
  setShowLogin(b : boolean){
    this.showLogin = b;
  }
}

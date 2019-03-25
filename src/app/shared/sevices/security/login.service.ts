import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInStatus: boolean = false;


  constructor(private http: HttpClient) { }

  
  setLoggedIn(value:boolean){
    this.loggedInStatus = value;
  }

  get isloggedIn(){
    if(localStorage.getItem('access_token')){
      return true;
    }
    return this.loggedInStatus;
  }

  signin(data) {
    return this.http.post('api/signin', data);
  }
  
  signOut(id){
    if(localStorage.getItem('access_token')){
      localStorage.removeItem('access_token');
      localStorage.removeItem('user_role');
    }
    return this.http.delete('api/signout/'+id);
  }
}

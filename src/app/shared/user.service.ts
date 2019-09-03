import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{ User} from './user.model';
import { ElementSchemaRegistry } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  readonly baseURL  = 'http://localhost:3000/users';

  noAuthHeader = {headers: new HttpHeaders({'NoAuth':'True'})};

  postUser(user){
    return this.http.post(this.baseURL+'/register',user,this.noAuthHeader);
  }

  login(authCredentials){
    return this.http.post(this.baseURL+'/authenticate',authCredentials,this.noAuthHeader);
  }
  setToken(token:string){
localStorage.setItem('token',token);
  }

  getToken(){
   return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayload(){
    var token = this.getToken();
    if(token){
      var userPayload=atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
    return null;
  }

  getUserProfile(){
    return this.http.get(this.baseURL+"/userProfile");
  }

  getUserName(){
    return this.http.get(this.baseURL+"/userName");
  }


isLoggedIn(){
  var userPayload = this.getUserPayload();
  if(userPayload)
  return userPayload.exp > Date.now()/1000;
  else
  return false;
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }


  //curent user which is logged in from server
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`)
  }

  //get all user which is logged in from server
  public getAllUser(){
    return this.http.get(`${baseUrl}/user/get-all`);
  }

//generating token
  public generateToken(loginData:any){

    return this.http.post(`${baseUrl}/generate-token`,loginData);

  }

//saving token in local storage

public loginUser(token: string){
  localStorage.setItem("token",token);
  return true;  
}


//user is loged in or not
public isLogedIn(){
  let tokenStr=localStorage.getItem("token");
  if(tokenStr==undefined || tokenStr==null|| tokenStr==""){
    return false;
  }else{
    return true;
  }

   
}
 //logout remove token from local storage
 public  logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return true;
 }


 //get token
 public getToken(){
  return localStorage.getItem("token");
 }

 //set user detail
 public setUser(user: any){
  localStorage.setItem("user",JSON.stringify(user))
 }
 //getUser
 public getUser(){
  let userStr=localStorage.getItem("user");
  if(userStr!=null){
    return JSON.parse(userStr);
  }else{
    this.logout();
    return null;
  }



 }
 //get user role
public getUserRole(){
  let user=this.getUser(); 
  return user.authorities[0].authority;
}

}

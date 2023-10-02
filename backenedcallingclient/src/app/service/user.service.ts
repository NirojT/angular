import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  //add user
  public addUser(user:any){
    return this.http.post(`${baseUrl}/user/create`,user);
  }

  //verify user
  public checkUser(user:any){
    return this.http.get(`${baseUrl}/user/get`,user)
  }

//get all user_roles
getAllUserRoles(){
  return this.http.get(`${baseUrl}/roles/get`);

}


  //delete user_role first
deleteUserRole(id:number){
  return this.http.delete(`${baseUrl}/roles/delete/${id}`);
}
  //delete user
deleteUser(id:number){
  return this.http.delete(`${baseUrl}/user/delete/${id}`);
}

}

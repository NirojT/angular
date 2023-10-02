import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserUpdate {

  constructor(private http:HttpClient) { }


  
  //update user
  updateUser(users:any,id:any){
            return this.http.put(`${baseUrl}/user/update/${id}`,users);
  
  }
  
  
  
  
  }
  
import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {

constructor(private userService:UserService, private snack:MatSnackBar){}
  

public user={
  name:"",
  password:"",
  email:"",
};


ngOnInit(): void {}

formSubmit(){
  console.log(this.user);

  if(this.user.name=="" || this.user.name==null)
  {
    // alert("user required");
    this.snack.open("Name is required","",{duration:2000});
    return
  }
   else if (this.user.password=="" || this.user.password==null)
   {
    this.snack.open("password is required","",{duration:2000})
   return
   }
   else if (this.user.email=="" || this.user.email==null){
    this.snack.open("Email is required","",{duration:2000})
    return
   }
   
 
   
 
  

  //add user
  this.userService.addUser(this.user).subscribe(
 (data:any)=>{
  //success
  console.log(data)
  //alert("success")
  Swal.fire("success done", "user is registered successfully and user id is "+data.uid,"success");
 },
 (error)=>{
  //error
  console.log(error)
  this.snack.open("something went wrong..","",{duration:3000,
  });

 }

  )






}


}



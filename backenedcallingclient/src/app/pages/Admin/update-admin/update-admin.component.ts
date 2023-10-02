import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminUpdate } from 'src/app/service/Admin-update.service';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  // adminData={
  //   name: "",
  //   password:"",
  //   email:"",

  // }

Admin:any=null;
constructor(private login:LoginService,private updatAdmin:AdminUpdate,private snack:MatSnackBar){}

  ngOnInit(): void {
   this.Admin=this.login.getUser();
   
  }
  formSubmit(){
const id=this.Admin.uid;

this.updatAdmin.updateUser(this.Admin,id).subscribe(
  (data:any)=>{
    //success
    console.log(data)
   //alert("success")
    Swal.fire("success done", "User is updated successfully and post id is "+id,"success");
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

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';
import { UserUpdate } from 'src/app/service/user-update.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  user:any=null;
  constructor(private login:LoginService,private userUpdate:UserUpdate,private snack:MatSnackBar){}
  
    ngOnInit(): void {
     this.user=this.login.getUser();
     
    }
    formSubmit(){
  const id=this.user.uid;
  
  this.userUpdate.updateUser(this.user,id).subscribe(
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

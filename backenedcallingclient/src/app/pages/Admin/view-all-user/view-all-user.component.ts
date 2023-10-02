import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.css']
})
export class ViewAllUserComponent implements OnInit {
users:any =null;
userRoles:any =null;

constructor(private snack:MatSnackBar,
  private loginService:LoginService,
  private userService:UserService){}

  ngOnInit(): void {
     this.loginService.getUser();

     this.userService.getAllUserRoles().subscribe(
      (data:any)=>{
        console.log(data);
        this.userRoles= data
    
     
      } ,(error:any)=>{
        console.log(error);
  
        
      }
     )
     //next
     this.loginService.getAllUser().subscribe(
    (data:any)=>{
      console.log(data);
      this.users= data
   
    } ,(error:any)=>{
      console.log(error);

      
    }
   )
  }

  delete(uid:number,userRole_id:number){
    //deleting role first
   this.userService.deleteUserRole(userRole_id)  


    //than user
    this.userService.deleteUser(uid).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire("success done", "User deleted", "success");
       location.reload();
      },(error)=>{
        console.log(error);
        Swal.fire("Error!", "User could not be deleted", "error");
      }
    )


  }




}

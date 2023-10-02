import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any=null;

  role:any=null;
  
  
 
   constructor(public login:LoginService){}
 
 
    ngOnInit(): void {
     this.login.loginStatusSubject.subscribe(() => {
     
    this.user=this.login.getUser(); 
    this.role=this.user.authorities[0].authority;
   });
 
   
   this.user = this.login.getUser();
 this.role=this.user.authorities[0].authority;




  }

}

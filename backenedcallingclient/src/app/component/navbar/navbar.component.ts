import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{

  isLogedIn:boolean=false;
  
 user:any=null;
 role:any=null;
 
 

  constructor(public login:LoginService){}


   ngOnInit(): void {
    this.login.loginStatusSubject.subscribe(() => {
    this.isLogedIn=this.login.isLogedIn(); 
   this.user=this.login.getUser(); 
   this.role=this.user.authorities[0].authority;
  });

  this.isLogedIn = this.login.isLogedIn(); 
  this.user = this.login.getUser();
this.role=this.user.authorities[0].authority;
   this.login.loginStatusSubject.asObservable()
   .subscribe((data)=>{
    this.isLogedIn=this.login.isLogedIn(); 
   this.user=this.login.getUser(); 
   })
           
   }
  
    
  
  logout(){
    this.login.logout();
   //this.login.loginStatusSubject.next(false);
   
   
    window.location.reload();
  }

}

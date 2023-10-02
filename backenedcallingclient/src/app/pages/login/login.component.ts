import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = {
    name: '',
    password: '',
  };

  constructor(private snack: MatSnackBar, private login: LoginService,private router:Router) {}

  formSubmit() {
    if (this.loginData.name.trim() == '' || this.loginData.name == null) {
      this.snack.open('User name is Required', '', {
        duration: 2000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('password is Required', '', {
        duration: 2000,
      });
    }

    //requesting server

    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);

        //login..
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user: any) => {
          this.login.setUser(user);
          console.log(user);

          //redirect Admin to admin dashboard or normal to normal dashboard

          if(this.login.getUserRole()=="ADMIN" ||this.login.getUserRole()=="Admin"){
            this.router.navigate(["admin"]);
            this.login.loginStatusSubject.next(true);
            //window.location.href="/admin"
          }else if(this.login.getUserRole()=="NORMAL"||this.login.getUserRole()=="Normal"){
           this.router.navigate(["user"]);
           this.login.loginStatusSubject.next(true);
           
            //window.location.href="/user"
          }else{
            this.login.logout();

            
           // location.reload();
          }
        });
      },
      (error: any) => {
        console.log('error');
        console.log(error);
        this.snack.open("invalid details ! Try again","",{
          duration:2000,
        })
      }
    );
  }
}

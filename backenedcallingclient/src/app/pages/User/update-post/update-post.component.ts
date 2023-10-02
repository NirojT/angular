import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';
import { PostService } from 'src/app/service/post.service';
import { UserUpdate } from 'src/app/service/user-update.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  posts:any=null;
  user:any=null;
  constructor(private login:LoginService,private postUpdate:PostService,private snack:MatSnackBar){
  }
 
  ngOnInit(): void {
    this.user=this.login.getUser();
    const uid=this.user.uid;
   this.postUpdate.getAllPostOfUserSpecific(uid).subscribe(
      (data:any)=>{
        console.log(data);
        this.posts=data;

      

      },(error:any)=>{
        console.log(error);
 
        
      }
    );
    
  }
  



  formsSubmit(){
   const tar = this.posts
    // const id= tar.pid;
    // console.log(id);
    
  for(const loopPosts of tar){
    const id= loopPosts.pid;



  this.postUpdate.updatePost(loopPosts,id).subscribe(
    (data:any)=>{
      console.log(data);
      
    },(error:any)=>{
console.log(error);

    }
  )
  
  }
}
}


  
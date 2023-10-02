import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-post-specific',
  templateUrl: './view-post-specific.component.html',
  styleUrls: ['./view-post-specific.component.css']
})
export class ViewPostSPecificComponent implements OnInit {
  posts:any=null;
  user:any=null;
   constructor(private postService:PostService,private snack:MatSnackBar,
     private loginService:LoginService
     
     ){}
   ngOnInit(): void {
     this.user=this.loginService.getUser();
     const userId=this.user.uid;
     this.postService.getAllPostOfUserSpecific(userId).subscribe (
       (data:any)=>{
         console.log(data);
        
   this.posts=data;
 
   
   console.log(this.posts);
   
       },(error:any)=>{
         console.log(error);
  
         
       }
     )
 
     
   }
   delete(postId: number) {
     this.postService.deletePost(postId).subscribe(
       (data: any) => {
         console.log(data);
         Swal.fire("success done", "Post deleted", "success");
         location.reload();
       },
       (error: any) => {
         console.log(error);
         Swal.fire("Error!", "Post could not be deleted", "error");
       }
     );
  
  
   }
      //update post
   
  
 
 
 
 }
 
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
    postData = {
      title: '',
      content: '',
      image: null
    };
    user: any = null;
    showForm = false;
  
    constructor(
      private postService: PostService,
      private snack: MatSnackBar,
      private login: LoginService
    ) {}
  
    ngOnInit(): void {
      this.user = this.login.getUser();
    }
  
    toggleForm() {
      this.showForm = !this.showForm;
    }
  
    onFileSelected(event: any) {
      if (event.target.files.length > 0) {
        const filess = event.target.files[0];
        this.postData.image = filess;
      }
    }
  
    formSubmit() {
      const id = this.user.uid;
      const formData = new FormData();
      formData.append('title', this.postData.title);
      formData.append('content', this.postData.content);
     if (this.postData.image) {
    formData.append('image', this.postData.image);
  }
  
  
      this.postService.addPost(formData, id).subscribe(
        (data: any) => {
          // success
          console.log(data);
          Swal.fire(
            'Success!',
            'Post added successfully and post id is ' + id,
            'success'
          );
        },
        (error) => {
          // error
          console.log(error);
          this.snack.open('Something went wrong..', '', { duration: 3000 });
        }
      );
    }
  }
  


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  //add post
  addPost(formData: FormData, id: any) {
    return this.http.post(`${baseUrl}/post/create/${id}`, formData);
  }

  //update post
  updatePost(posts: any, pid: any) {
    return this.http.put(`${baseUrl}/post/update/${pid}`, posts);
  }
  //get all post
  getAllPost() {
    return this.http.get(`${baseUrl}/post/all`);
  }
  //get  post  by id
  getPostById(id: any) {
    return this.http.get(`${baseUrl}/post/get/${id}`);
  }
  //get all post belonging to only that user who posted it
  getAllPostOfUserSpecific(userId: any) {
    return this.http.get(`${baseUrl}/post/user/${userId}`);
  }

  //delete all post
  deletePost(id: any) {
    return this.http.delete(`${baseUrl}/post/delete/${id}`);
  }
}

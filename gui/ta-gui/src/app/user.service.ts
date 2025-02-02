import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  bindedPostKeys: any;
  private headers = new Headers({'Content-Type':'application/json'});
  private taURL = 'http://localhost:3000';
  constructor(private http:HttpClient) {
 
  }
 
  getUser():Observable<any>{
    return this.http.get(this.taURL + "/my_posts");
 
  };
  getPosts():Observable<any>{
    return this.http.get(this.taURL + "/posts");
 
  };
  addComment(data:object){
    return this.http.post(this.taURL + "/posts", data);
  }
  addPost(post:string,id:number){
    const body = [post,id];
    console.log(body);
 
    return this.http.post(this.taURL + "/my_posts",body);
  }
  updatePost(post:string, id:number,index:number){
    return this.http.put(this.taURL + "/edit_post",[post,id,index]);
  }
  // deletePost(id:number, index:number){
  //   let endpoints:string = `/:${id}/:${index}`;
  //   return this.http.delete(this.taURL + "/my_posts" +endpoints);
  // }
  };
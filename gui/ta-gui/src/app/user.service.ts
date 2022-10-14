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
  addPost(user:User){
    var body = user;
    return this.http.post(this.taURL + "/my_posts",body);
  }
  // addPost(post: string): Observable<any> {
  //   const date = new Date();
  //   const dayHour = date.toLocaleString('pt-br');
  //   post = `" ${post} "  -- ${dayHour}`;

  //   return this.http.post(this.taURL + "my_posts");

  // };
  // addComment(comment: string): void {
  //   const date = new Date();
  //   const dayHour = date.toLocaleString('pt-br');
  //   comment = `" ${comment} "  -- ${dayHour}`; 
  //   this.userMaster.myComments.push(comment);
  //   console.log('Comment realizado com sucesso!!!');
  // };
  // getPosts() {
  //   return this.userMaster.myPosts;
  // };

  // getUsername(){
  //   return this.userMaster.username
  // };
  

  // attPost(post: string, index: number): void {

    
  //     const date = new Date();
  //     const dayHour = date.toLocaleString('pt-br');
  //     post = `" ${post} "  -- ${dayHour}`;

  //     this.userMaster.myPosts[index] = post;
  //     console.log('Post editado com sucesso!!!');

  //     console.log(this.getPosts());
  //     console.log(this.userMaster.myPosts[index]);
  //     console.log(post);
  //  };
  };
  


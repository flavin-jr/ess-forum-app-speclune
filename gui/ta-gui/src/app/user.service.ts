import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userMaster = new User();
  bindedPostKeys: any;
  constructor() {

  }

  showPosts(): void {
    for (let posts of this.userMaster.myPosts) {
      console.log(posts);
    }
  };
  addPost(post: string): void {
    const date = new Date();
    const dayHour = date.toLocaleString('pt-br');
    post = `" ${post} "  -- ${dayHour}`;
    this.userMaster.myPosts.push(post);

    console.log('Post criado com sucesso!!!');
  };
  addComment(comment: string): void {
    const date = new Date();
    const dayHour = date.toLocaleString('pt-br');
    comment = `" ${comment} "  -- ${dayHour}`; 
    this.userMaster.myComments.push(comment);
    console.log('Comment realizado com sucesso!!!');
  };
  getPosts() {
    return this.userMaster.myPosts;
  };

  getUsername(){
    return this.userMaster.username
  };
  

  attPost(post: string, index: number): void {

    
      const date = new Date();
      const dayHour = date.toLocaleString('pt-br');
      post = `" ${post} "  -- ${dayHour}`;

      this.userMaster.myPosts[index] = post;
      console.log('Post editado com sucesso!!!');

      console.log(this.getPosts());
      console.log(this.userMaster.myPosts[index]);
      console.log(post);
   };
  };
  


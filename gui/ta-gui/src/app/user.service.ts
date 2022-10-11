import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userMaster = new User();
  constructor() {

  }

  showPosts(): void {
    for (let posts of this.userMaster.myPosts) {
      console.log(posts);
    }
  }
  addPost(post: string): void {
    const date = new Date();
    const dayHour = date.toLocaleString('pt-br');
    post = `" ${post} "  -- ${dayHour}`; 
    this.userMaster.myPosts.push(post);
    console.log('Post criado com sucesso!!!');
  }
  getPosts() {
    return this.userMaster.myPosts;
  }
}

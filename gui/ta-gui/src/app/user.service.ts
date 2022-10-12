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
  getPosts() {
    return this.userMaster.myPosts;
  };
  attPost(post: string, index: number): void {
    if (!post) {
      alert('Erro ao editar post!!!');

    }
    else {
      const date = new Date();
      const dayHour = date.toLocaleString('pt-br');
      post = `" ${post} "  -- ${dayHour}`;

      this.userMaster.myPosts[index] = post;
      console.log('Post editado com sucesso!!!');

      console.log(this.getPosts());
      console.log(this.userMaster.myPosts[index]);
      console.log(post);
    }
  };
  handleError(index: number = -1) {

  }
}

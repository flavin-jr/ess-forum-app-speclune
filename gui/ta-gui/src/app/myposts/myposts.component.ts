import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { User } from '../user';
@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {
  createPost: boolean = false;
  edit = false;
  constructor(private user: UserService) { }
  public userMaster: any;
  post:string = '';
  ngOnInit(): void {
    this.userMaster = this.user;
    console.log(this.createPost);
    
  }
  public toglleCreatePost(): void {
    this.createPost = !this.createPost;
    console.log(this.userMaster.getPosts());
    console.log(this.createPost);
  }
  
  public openEdit(post:string): void{
    this.edit = !this.edit;
    this.post = post;
  }
}

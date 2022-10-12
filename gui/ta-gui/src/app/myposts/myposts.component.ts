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
  index:number = -1;
  ngOnInit(): void {
    this.userMaster = this.user;
    console.log(this.createPost);
    
  }
  public toglleCreatePost(): void {
    this.createPost = !this.createPost;
    
  }
  public toggleOpenEdit():void{
    this.edit = !this.edit;

  }
  public openEdit(post:string, index: number): void{
    this.toggleOpenEdit();
    this.post = post.replace(/[0-9"-/:]+/g,'');
    this.index = index;
  }
  get getBindedEntries():Array<any>{
    return Array.from(this.user.getPosts().entries());
  }
}

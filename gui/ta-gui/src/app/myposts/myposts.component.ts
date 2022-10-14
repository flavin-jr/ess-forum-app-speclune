import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
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
  post: string = '';
  index: number = -1;
  msgPost: boolean = true;
  allPosts:Array<string> = [];
  userMaster:User = {
    id: -1,
    username: '',
    myPosts: [],
    myComments: []
  };

  ngOnInit(): void {
    this.getUserMaster()

  }
  getUserMaster(){
    this.user.getUser()
    .subscribe(data=>{
      this.userMaster = new User(data);
      this.allPosts = [...this.userMaster.myPosts];

      this.getPosts();
    })

  
  }
  getPosts():string[] {
    
    console.log(this.allPosts);
    return this.allPosts

  }
  public formatedPost(post:string): string{
    const date = new Date();
    const dayHour = date.toLocaleString('pt-br');
    post = `" ${post} "  -- ${dayHour}`;
    return post
  }
  addPost(post:string):void{
    post = this.formatedPost(post)
    this.allPosts.push(post);
    this.userMaster.myPosts.push(post);
    this.user.addPost(this.userMaster)
    .subscribe(res=>{console.log(res)});
    console.log(this.allPosts);
    
  }
  public toglleCreatePost(): void {
    this.createPost = !this.createPost;

  }
  public toggleOpenEdit(): void {
    this.edit = !this.edit;

  }
  public openEdit(post: string, index: number): void {
    this.toggleOpenEdit();
    this.post = post.replace(/[0-9"-/:]+/g, '');
    this.index = index;
  }
  get getBindedEntries(): Array<any> {
    return Array.from(this.getPosts().entries());
  }
  handleClear(): void {
    this.post = '';
  }

  handlePost(post: string): void {
    if (!post) {
      this.msgPost = false;
    }
    else {
      this.msgPost = true;
      this.addPost(post);
      this.handleClear();
    }
  }
}
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
  msgSucess: boolean = false;
  allPosts:Array<string> = [];
  userMaster:User = {
    id: -1,
    username: '',
    myPosts: [],
    comments: []
  };
  username:string = '';

  ngOnInit(): void {
    this.getUserMaster()

  }
  getUserMaster(){
    this.user.getUser()
    .subscribe(data=>{
      this.userMaster =  new User(data);
      this.allPosts = [...this.userMaster.myPosts];
      this.username = this.userMaster.username;
      this.getPosts();
    })

  
  }
  getPosts():string[] {
    
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
    .subscribe(res=>{console.log("Poste adicionado ao BD!!!")});
    console.log(this.allPosts);
    
  }
  public toggleCreatePost(): void {
    this.createPost = !this.createPost;

  }
  public toggleEdit(): void {
    this.edit = !this.edit;

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
      this.toggleCreatePost();
      this.msgSucess = true;
      this.sleep(2500).then(()=>{
        this.msgSucess = false;
      })
    }
  }
  
  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
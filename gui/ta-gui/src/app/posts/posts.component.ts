import { Component, OnInit } from '@angular/core';
 
import { UserService } from '../user.service';
import { User} from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 
  constructor(private user: UserService,private router:Router ) { }
  commentStatus: Array<boolean> = [];
  seeMoreStatus: Array<boolean> = [];
  limitSize:number = 50;
  commentText:string = '';
 
  allPosts: Array<any>= [];
  public allUsers: Array<User>= [];
  allUsersTemp:Array<User>= [];
  allPostsSize = this.allPosts.length;
 
  ngOnInit(): void {
    this.getAllUser();
 
  }
  getAllUser(){
    this.user.getPosts()
    .subscribe(data=>{
      this.allUsers = data;
      this.allUsersTemp = [...this.allUsers];
      this.fillPosts();
    })
  }
  fillPosts():void{
    for(let user of this.allUsersTemp)
    {
      for(let post of user.myPosts)
      {
        if(user.comments.length === 0){
          this.allPosts.push({id:user.id, post:post ,comment:[]});
        }
        for(let comments of user.comments)
        {
          user.comments.shift(); 
          this.allPosts.push({id:user.id, post:post ,comment:comments});
          this.seeMoreStatus.push(false); //setando o array como falso para cada comentário
        }
        this.commentStatus.push(false); //setando o array como falso para cada post
      }
    }
    console.log(this.allPosts);
    console.log(this.commentStatus);
  }
  getUsernameById(id:number):string{
    const name:any = this.allUsers.find((value)=>{
 
      return value.id===id;
    });
    return name.username;
  }
 
  toggleComment(pos:number):void{
    this.commentStatus[pos] = !this.commentStatus[pos];
  }
 
  clearTextArea():void{
    this.commentText = '';
  }
 
  addComment(id:number, post:string, idSender:number, comment:String):void{
    const data = {id:id,post:post,idSender:idSender,comment:comment};
 
    this.user.addComment(data)
    .subscribe(res=>{
 
      console.log('comentario adicionado');

    });
    this.redirectTo('/posts')
  }
  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

 reduceTextSize(text:string):string{
  if(text.length > this.limitSize) 
  {
    text = text.substring(0,this.limitSize);
  }
  return text;
 }

 toggleSeeMore(pos:number):void{
  this.seeMoreStatus[pos] = !this.seeMoreStatus[pos];
 }
 
}
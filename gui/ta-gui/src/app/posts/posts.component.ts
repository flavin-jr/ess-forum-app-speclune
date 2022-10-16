import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User} from '../user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private user: UserService) { }
  commentStatus: boolean = false;

  allPosts: Array<any>= [];
  public allUsers: Array<User>= [];
  allUsersTemp:Array<User>= [];
  
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
    console.log(this.allUsersTemp);
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
        }
      }
    }
    console.log(this.allPosts);
  }
  getUsernameById(id:number):string{
    const name:any = this.allUsers.find((value)=>{

      return value.id===id;
    });
    console.log(name.username);
    return name.username;
  }

  toggleComment():void{
    this.commentStatus = !this.commentStatus;
    console.log(this.commentStatus);
  }

}

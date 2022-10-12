import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private user: UserService) { }
  public userMaster: any;
  comment: boolean = false;
  
  ngOnInit(): void {
    this.userMaster = this.user;
    console.log(this.comment);
  }
  toggleComment():void{
    this.comment = !this.comment;
    console.log(this.comment);
  }

}

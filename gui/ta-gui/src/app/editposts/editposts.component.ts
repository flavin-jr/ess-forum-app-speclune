import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-editposts',
  templateUrl: './editposts.component.html',
  styleUrls: ['./editposts.component.css']
})
export class EditpostsComponent implements OnInit {

  @Input()post!: string;
  @Input()index!: number;
  @Input()edit!: boolean;
  msgPostText:string = '';
  msgPost:boolean = true;
  constructor(private user:UserService) { }
  userMaster = this.user;
  ngOnInit(): void {
    console.log(this.post);
  }
  public toggleEdit():void{
    this.edit = !this.edit;

  }

  handleEdit(post: string): void {
    console.log()
    if (!post) {
      this.msgPost = false;
    }
    else{
      this.msgPost = true;
      this.userMaster.attPost(post,this.index);
      this.toggleEdit();
    }
  }
  
}

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
  msgPost:boolean = false;
  constructor(private user:UserService) { }
  userMaster = this.user;
  ngOnInit(): void {
    console.log(this.post);
  }
  public toggleEdit():void{
    this.edit = !this.edit;

  }
  public handleMsg(msg:string):void{
    if(msg === 'alt'){
      this.msgPostText = 'Post alterado com sucesso!!!';
    }
    else{
      this.msgPostText = 'Erro ao alterar post!!!';
    }
  }
  
}

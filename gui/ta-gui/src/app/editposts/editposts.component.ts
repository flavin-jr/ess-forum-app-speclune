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
  constructor(private user:UserService) { }
  userMaster = this.user;
  ngOnInit(): void {
    console.log(this.post);
  }
  
}

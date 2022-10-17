import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toggleMenu = false;
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
      
      this.username = this.userMaster.username;
      
    })
  }
  toggle():void{
    this.toggleMenu = !this.toggleMenu;
  }
  
}

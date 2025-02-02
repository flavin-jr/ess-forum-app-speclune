import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/app/user';
@Component({
  selector: 'app-editposts',
  templateUrl: './editposts.component.html',
  styleUrls: ['./editposts.component.css']
})
export class EditpostsComponent implements OnInit {
  userMaster:any;
  post:string = '';
  index:number = -1;
  msgPostText:string = '';
  msgPost:boolean = true;
  msgSucess:boolean = false;
  constructor(private user:UserService,private router:Router ,private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.userMaster = history.state[0];
    this.index = history.state[1];
    this.post = this.userMaster.myPosts[this.index];
    console.log(this.post)
    this.handleHeaderPost(this.post);
    console.log(this.userMaster);
    console.log(this.post);
  
  }

  handleHeaderPost(post:string){
    var postInArray: string[] = post.split(' ');
    console.log();
    postInArray.splice(-4,4);
    postInArray.shift();
    console.log(postInArray);
    this.post = postInArray.join(' ');
  }
  handleEdit(post: string): void {
    console.log()
    if (!post) {
      this.msgPost = false;
    }
    else{
      this.msgPost = true;
      this.attPost(post);
      this.msgSucess = true;
      this.sleep(2500).then(()=>{
      this.msgSucess = false;
      this.router.navigateByUrl('/my_posts');
      })
    }
  }
  public formatedPost(post:string): string{
    const date = new Date();
    const dayHour = date.toLocaleString('pt-br');
    post = `" ${post} " -- ${dayHour}`;
    return post
  }
  attPost(post:string){
    this.userMaster.myPosts[this.index] = this.formatedPost(post);
    console.log(this.userMaster);
    const id:number = this.userMaster.id;
    console.log(id);

    this.user.updatePost(this.formatedPost(post),id,this.index)
    .subscribe(res=>{
      console.log('Post editado com sucesso!!!!');
    });

  }
  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

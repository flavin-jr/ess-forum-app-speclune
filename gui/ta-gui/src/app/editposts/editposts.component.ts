import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editposts',
  templateUrl: './editposts.component.html',
  styleUrls: ['./editposts.component.css']
})
export class EditpostsComponent implements OnInit {

  @Input() post:  string | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.post);
  }
  
}

import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/share/post.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup}  from '@angular/forms';
import { Post } from 'src/app/share/post.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  form:FormGroup;

  constructor(private postSerivce:PostService, private http: HttpClient) { }
  public showBackendData;
  error: Error;
  newPost:Post;
  ngOnInit() {
    // this.postSerivce.addPost(true,true,124);
    this.postSerivce.addPost(this.newPost)
    .subscribe(
      (data)=>{this.showBackendData=data; console.log(this.showBackendData)},
      error=>{this.error=error}
    )
  }



  // showPost(){
  //   this.postSerivce.addPost(
  //     this.form.value.allplans,
  //     this.form.value.bydemographics,
  //     this.form.value.MemberId
  //   )
    
  // }
  

}

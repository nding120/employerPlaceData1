import { Component, OnInit } from '@angular/core';
import { PostService } from '../share/post.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postService:PostService, private http: HttpClient) { }
  public showPostData;///showData: model;
  error: Error;
  ngOnInit() {
    this.postService.getPost()
    .subscribe(
      (postData)=>{this.showPostData=postData;},
      error=>{this.error=error}
    )
    console.log(this.showPostData);
  }

}

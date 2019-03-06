import { Component, OnInit } from '@angular/core';
import { PostService } from '../../share/post.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-wvzipcode',
  templateUrl: './wvzipcode.component.html',
  styleUrls: ['./wvzipcode.component.css']
})
export class WVzipcodeComponent implements OnInit {

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



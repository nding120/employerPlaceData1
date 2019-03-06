import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/share/post.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor(private postService:PostService, private http: HttpClient) { }
  public showNetworkData;///showData: model;
  error: Error;
  ngOnInit() {
    this.postService.getPost()
    .subscribe(
      (postData)=>{this.showNetworkData=postData;},
      error=>{this.error=error}
    )
    console.log(this.showNetworkData);
  }
}

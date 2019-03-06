import { Component, OnInit } from '@angular/core';
import { PostService } from '../../share/post.service';
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
    this.postService.getPostNetwork()
    .subscribe(
      (posData)=>{this.showNetworkData=posData;
        console.log(this.showNetworkData);},
      error=>{this.error=error}
    )
    
  }
}

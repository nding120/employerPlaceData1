import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/share/post.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sgvision',
  templateUrl: './sgvision.component.html',
  styleUrls: ['./sgvision.component.css']
})
export class SgvisionComponent implements OnInit {

  constructor(private postService:PostService, private http:HttpClient) { }

  public showVisionData;
  error:Error;
  ngOnInit() {
    this.postService.getPostDental()
    .subscribe(
      (postData)=>{this.showVisionData=postData; console.log(this.showVisionData);},
      error=>{this.error=error}
    )
  }

}

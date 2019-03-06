import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/share/post.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sgdental',
  templateUrl: './sgdental.component.html',
  styleUrls: ['./sgdental.component.css']
})
export class SgdentalComponent implements OnInit {

  constructor(private postService:PostService, private http:HttpClient) { }
  public showDentalData;
  error:Error;
  ngOnInit() {
    this.postService.getPostDental()
    .subscribe(
      (postData)=>{this.showDentalData=postData; console.log(this.showDentalData);},
      error=>{this.error=error}
    )
  }

}

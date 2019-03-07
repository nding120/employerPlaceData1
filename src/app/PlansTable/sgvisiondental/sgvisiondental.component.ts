import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from 'src/app/share/post.service';

@Component({
  selector: 'app-sgvisiondental',
  templateUrl: './sgvisiondental.component.html',
  styleUrls: ['./sgvisiondental.component.css']
})
export class SgvisiondentalComponent implements OnInit {

  constructor(private http:HttpClient, private postService:PostService) { }

  public showDVrateData;
  public showDVvariData;
  public showDVemplyData;
  public showDVcorpData;
  error:Error;
  ngOnInit() {
    this.postService.getPostDVrate().subscribe((data1)=>{this.showDVrateData=data1},
      error=>{this.error=error});
    this.postService.getPostDVvari().subscribe((data2)=>{this.showDVvariData=data2})
    this.postService.getPostDVemply().subscribe((data3)=>{this.showDVemplyData=data3})
    this.postService.getPostDVcorp().subscribe((data4)=>{this.showDVcorpData=data4})
  }

}

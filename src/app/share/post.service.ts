import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  postDataUrl='../../assets/data1.json';
  postNetworkUrl='../../assets/network.json';
  postDentalUrl='../../assets/dentalRate.json';
  postVisionUrl='../../assets/visionRate.json';
  postDVrateUrl="../../assets/dental_vistion_pricing_factors/ratingArea.json";
  postDVvariUrl="../../assets/dental_vistion_pricing_factors/variable.json";
  postDVemplyUrl="../../assets/dental_vistion_pricing_factors/employee.json";
  postDVcorpUrl="../../assets/dental_vistion_pricing_factors/CorpID.json";

  // get Zipcode data from backEnd or other path(urls)
  getPost(){
    return this.http.get(this.postDataUrl)  
    //after get we can pipe data and catchError()
    .pipe(
      catchError(this.handleError)
    );
  }
  
  //get network data 
  getPostNetwork(){
    return this.http.get(this.postNetworkUrl)  
    //after get we can pipe data and catchError()
    .pipe(
      catchError(this.handleError)
    );
  }

  //get dental data
  getPostDental(){
    return this.http.get(this.postDentalUrl)
    .pipe(
      catchError(this.handleError)
    );
  }
  
  //get vision data
  getPostVision(){
    return this.http.get(this.postVisionUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  //get V&D rate area
  getPostDVrate(){
    return this.http.get(this.postDVrateUrl)
    .pipe(
      catchError(this.handleError)
    );
  }
  //get V&D variable
  getPostDVvari(){
    return this.http.get(this.postDVvariUrl)
    .pipe(
      catchError(this.handleError)
    );
  }
  //get V&D employ
  getPostDVemply(){
    return this.http.get(this.postDVemplyUrl)
    .pipe(
      catchError(this.handleError)
    );
  }
  //get V&D corpID
  getPostDVcorp(){
    return this.http.get(this.postDVcorpUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  

  // errorHandler function:
  private handleError(error:HttpErrorResponse){

    if(error.error instanceof ErrorEvent){
      console.error('an error occured:'+ error.error.message)
    }
    else{
      console.error(
        `Backend returned code ${error.status}`+
        ` bosy was: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened; Try again!'
    )
  }


}

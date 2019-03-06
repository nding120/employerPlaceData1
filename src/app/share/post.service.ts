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

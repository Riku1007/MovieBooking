import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberVerService {
  // requestOptions = {
  //   params: new HttpParams()
  // };
  phNo: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': 'yYQISUCQiDyTpJvDKkXRaqmc3v97D14w',
    })
  };



  constructor(private httpClient: HttpClient) { }

  myMethod(data: any) {
    this.phNo = data;
  }
  verifyNumber(): Observable<any> {
    console.log(this.phNo);
    return this.httpClient
      .get<any>(`https://api.apilayer.com/number_verification/validate?number=${this.phNo}`, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  handleError(er: any) {
    return throwError(() => {
      console.log((er));
    })
  }

}

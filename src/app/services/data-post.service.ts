import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { FormData } from '../Utilities/formData';

@Injectable({
  providedIn: 'root'
})
export class DataPostService {
  headers = { 'content-type': 'application/json'} 

  constructor(private httpClient: HttpClient) {

   }
   postData(data: any): Observable<FormData[]> {
    return this.httpClient.post<FormData[]>(`https://633f110a0dbc3309f3c43c1c.mockapi.io/customers`, JSON.stringify(data),{'headers':this.headers})
    .pipe(retry(1), catchError(this.handleError));
  }
  getCustomerData(): Observable<FormData[]>{
    return this.httpClient.get<FormData[]>(`https://633f110a0dbc3309f3c43c1c.mockapi.io/customers`)
    .pipe(retry(1), catchError(this.handleError));
  }
  putCustomerData(id: string, body: any): Observable<any>{
    return this.httpClient.put<any>(`https://633f110a0dbc3309f3c43c1c.mockapi.io/customers/${id}`,body).pipe(retry(1), catchError(this.handleError));
  }

  handleError(er: any){
    return throwError(() => {
      console.log((er));
    })
  }
}

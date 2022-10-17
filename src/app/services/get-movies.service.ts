import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Movies } from '../Utilities/movieDatas';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {
  body: any; 
  constructor(private httpClient: HttpClient) { }

  getMovieDetail(): Observable<Movies[]> {
    return this.httpClient
      .get<Movies[]>("https://63415f6c16ffb7e275cfc2a6.mockapi.io/Movie")
      .pipe(retry(1), catchError(this.handleError));
  }
  updateData(data: any, id: string): Observable<any> {
    this.body = {
      "Seats": data
    }
    console.log(this.body);
    return this.httpClient.put<Movies[]>(`https://63415f6c16ffb7e275cfc2a6.mockapi.io/Movie/${id}`, this.body)
    .pipe(retry(1), catchError(this.handleError));
  }
  handleError(er: any){
    return throwError(() => {
      console.log((er));
    })
  }
}

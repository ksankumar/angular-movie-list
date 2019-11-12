import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from './config';
import {Movies} from './models/movies';
import {Details} from './models/details';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'https://api.themoviedb.org/3/movie/';

  constructor(private http: HttpClient) {
  }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }
  // Movie list
  getAllMovies(): Observable<Movies> {
    return this.http.get<Movies>(this.apiURL + 'popular?api_key=' + Config.apiKey)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

// Movie details
  getMovieDetails(id): Observable<Details> {
    return this.http.get<Details>(this.apiURL + id + '?api_key=' + Config.apiKey)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

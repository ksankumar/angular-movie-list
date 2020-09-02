import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';
import { Movies } from './models/movies';
import { Details } from './models/details';
import { Trailer } from './models/trailer';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = Config.apiUrl;

  constructor(private http: HttpClient) {
  }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }
  // Movie list
  getAllMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${this.apiURL}popular?api_key=${Config.apiKey}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Movie details
  getMovieDetails(id: number): Observable<Details> {
    return this.http.get<Details>(`${this.apiURL}${id}?api_key=${Config.apiKey}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Movie search
  searchMovie(query: string): Observable<Movies> {
    return this.http.get<Movies>(Config.search + query)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Get video id
  getMovieTrailer(id: number): Observable<Trailer> {
    return this.http.get<Trailer>(`${this.apiURL}${id}/videos?api_key=${Config.apiKey}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error: any) {
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

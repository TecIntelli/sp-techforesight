import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ApiObject } from '../models/technology.interface';


@Injectable()
export class ApiService {
  // Dieser dieser Link kann nach Bedarf ausgestauscht werden.
  api = '../../assets/data/technology-application-format.json';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'jwt-token'  <<--- API Key
    } ),
  };

  // Handle API errors - behandelt evtl. Fehler beim Auslesen der Daten
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error Message: A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'The API doesn´t work, please try again later.');
  }

  getData(): Observable<ApiObject> {
    return this.http.get<ApiObject>(this.api, this.httpOptions).pipe(
      retry(3),
      catchError(this.handleError),
    );
  }
}



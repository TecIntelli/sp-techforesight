import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ApiObject } from '../models/technology.interface';


/* Dieser Service liest Daten aus einer API-Schnittstelle aus.
Detailliertere Kommentare finden sich in api1.service.ts
  */

@Injectable({
  providedIn: 'root',
})
export class Api2Service {
  // Dieser dieser Link kann nach Bedarf ausgestauscht werden.
  api = '../../assets/data/technology-expert-format.json';

  constructor(private http: HttpClient) { }

  // Http Optionen
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'jwt-token'  <<--- API Key
    } ),
  };

  // Umgang mit API Fehlern
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
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

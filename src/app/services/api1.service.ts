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

  // Umgang bei Fehler im Auslesen der API - behandelt evtl. Fehler beim Auslesen der Daten
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error Message: A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // Das Backend gibt einen Error Code zurück.
      // Der 'response body' enthält ggf. Hinweise zum Fehler.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Obervable mit Fehlermeldung
    return throwError(
      'The API doesn´t work, please try again later.');
  }

  // Funktion zum Abruft der Daten aus dem API, der Rückgabewert ist ein Observable
  // nach 3 Versuchen wir ein Error geworfen
  getData(): Observable<ApiObject> {
    return this.http.get<ApiObject>(this.api, this.httpOptions).pipe(
      retry(3),
      catchError(this.handleError),
    );
  }
}



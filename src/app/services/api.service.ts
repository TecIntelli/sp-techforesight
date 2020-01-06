import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Technology, TechnologyRaw } from '../models/technology';

/**  Daten aus API oder lokalem Fileserver laden **/

@Injectable()
export class ApiService {
  local = './assets/data/books.json';
  /**
   * Bsp für API Einlese
   * api = 'https://book-monkey2-api.angular-buch.com'
  **/
  constructor(private http: HttpClient) {}

  // Daten aus json-File laden
  loadAll(): Observable<Technology[]> {
     return this.http
       .get<TechnologyRaw[]>(`${this.local}`)
       /**
        * .get<BookRaw[]>(`${this.api}/books`)
        */
       .map(raws => this.provideBooksFrom(raws));
  }

  //Mapping der Daten aus Raw zu benötigten Datenn
  provideBooksFrom(raws: TechnologyRaw[]): Technology[] {
    return raws.map(raw => new Technology(
      raw.Technologie,
      //raw.authorTeam = raw.authors.join(' & ')
    ));
  }
}

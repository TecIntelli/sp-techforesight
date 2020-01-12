import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  api = '../../assets/data/technologydatasource.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.api);
  }
}

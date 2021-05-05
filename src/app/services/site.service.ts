import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  title = 'title',
  country = 'country',
  state = 'state'
}

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  url = 'http://localhost:3000/sites';

  constructor(private http: HttpClient) { }

  public sendGetRequest(){
    return this.http.get(this.url);
  }

  getDetails(id) {
    return this.http.get(`${this.url}/${id}`);
  }
}


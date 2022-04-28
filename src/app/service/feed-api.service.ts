import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Entries } from '../models/movies-and-series-feed';
import { catchError, tap } from 'rxjs/operators';

const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
const url = '../assets/sample.json';

@Injectable({
  providedIn: 'root'
})

export class FeedApiService {
  public handleError: any;

  constructor(private http: HttpClient) { }

  public getFeed() {
    return this.http.get<Entries[]>(url, {headers});
  }
}

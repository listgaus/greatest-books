import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from '@angular/common/http';


@Injectable()
export class NetService implements OnInit {
  googleApiUrl: string = 'https://www.googleapis.com/books/v1/volumes?q=';
  maxResult: string = '&maxResults=40';
  apiKey: string = '&key=AIzaSyAljHvgQzlHCpN_MQkmt33oUCaJ0UM5mT4';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getBooks(query:string): Observable<any> {
    return this.http.get(`${this.googleApiUrl}${query}${this.maxResult}${this.apiKey}`);
  }
  getBooksWithMax(query:string,maxResult:number): Observable<any> {
    return this.http.get(`${this.googleApiUrl}${query}&maxResults=${maxResult}${this.apiKey}`);
  }
}



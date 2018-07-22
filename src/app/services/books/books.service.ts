import { Injectable } from '@angular/core';
import * as M from '../../app.models';
import { Observable } from 'rxjs';
import { NetService } from '../net/net.service';

@Injectable()
export class BooksService {
  books: M.GoogleBook[];

  constructor(private net: NetService) {}

  getBooks(query: string): Observable<M.GoogleBook[]> {
    return this.net.getBooks(query);
  }
  getBestBooks(): Observable<M.GoogleBook[]> {
    return this.net.getBooks(`top 10`);
  }

  getBooksWithMax(query: string, maxResult: number) {
    return this.net.getBooksWithMax(query, maxResult);
  }

}

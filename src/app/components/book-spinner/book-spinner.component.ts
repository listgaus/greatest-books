import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books/books.service';
import * as M from '../../app.models';

@Component({
  selector: 'book-spinner',
  templateUrl: './book-spinner.component.html',
})
export class BookSpinnerComponent implements OnInit {
  books: M.GoogleBook[];

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.loadData();

  }

  loadData() {
    this.booksService.getBooksWithMax('Angular', 5).subscribe(
      (data: any) => {
        this.books = data.items;
      },
      () => {
        console.log('An error occurred');
      }
    );
  }

}

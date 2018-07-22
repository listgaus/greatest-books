import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BooksService} from './services/books/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  booksOfTheWeek: any[] = [];
  booksOfTheYear: any[] = [];

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.booksService.getBestBooks().subscribe(
      (data: any) => {
        for (let i = 0; i <= 10; i++) {
          if (i > 5) {
            this.booksOfTheWeek.push(data.items[i]);
            continue;
          }
          this.booksOfTheYear.push(data.items[i]);
        }
      },
      () => {
        console.log('An error occurred');
      }
    );
  }
}

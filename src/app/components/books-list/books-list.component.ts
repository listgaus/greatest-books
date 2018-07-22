import {Component, OnInit, TemplateRef} from '@angular/core';
import {BooksService} from '../../services/books/books.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import * as M from '../../app.models';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['../../../assets/styles/styles.css']
})
export class BooksListComponent implements OnInit {
  books: M.GoogleBook[];
  currentBook: M.GoogleBook;
  newBook: M.GoogleBook = {};
  defaultQuery: string = `martial arts`;
  isLoading: boolean;
  searchBookText: string = '';
  booksWithNoFilters: any[];
  modalRef: BsModalRef;
  isDateValid: boolean;
  isTitleDuplicate: boolean;
  isLettersValid: boolean;
  isAuthorsValid: boolean;
  isStringLenghtValid: boolean;

  constructor(private booksService: BooksService,
              private modalService: BsModalService) {
    this.initNewBook();
    this.initValidations();
  }

  ngOnInit() {
    this.loadData(this.defaultQuery);
  }

  initNewBook(): void {
    this.newBook.id = ' ';
    this.newBook.id = Math.random().toString(36).substring(2);
    this.newBook.volumeInfo = {};
    this.newBook.volumeInfo.title = ' ';
    this.newBook.volumeInfo.publishedDate = '1970-01-01';
    this.newBook.volumeInfo.authors = [' '];
    this.newBook.volumeInfo.imageLinks = {};
    this.newBook.volumeInfo.imageLinks.thumbnail = ' ';
  }

  updateCurrentBook(editableBook: M.GoogleBook) {
    this.currentBook = JSON.parse(JSON.stringify(editableBook));
  }

  initValidations() {
    this.isDateValid = true;
    this.isLettersValid = true;
    this.isAuthorsValid = true;
    this.isStringLenghtValid = true;
    this.isTitleDuplicate = false;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  filterBooks() {
    this.books = JSON.parse(JSON.stringify(this.booksWithNoFilters));
    this.books = this.books.filter(book => {
      return book.volumeInfo.title.toLocaleLowerCase().includes(this.searchBookText.toLocaleLowerCase().trim());
    });
  }

  loadData(subject: string) {
    this.isLoading = true;
    this.booksService.getBooks(subject).subscribe(
      (data: any) => {
        this.searchBookText = '';
        this.isLoading = false;
        this.books = data.items;
        this.books = this.books.sort(this.compare).slice(0, 10);
        this.booksWithNoFilters = JSON.parse(JSON.stringify(this.books));
      },
      () => {
        console.log('An error occurred');
      });
  }

  compare(a, b) {
    if (a.volumeInfo.title != b.volumeInfo.title)
      return -1;
    if (a.volumeInfo.title = b.volumeInfo.title)
      return 1;
  }

  deleteBook(bookToDelete: M.GoogleBook) {
    for (let i = 0; i <= this.books.length; i++) {
      if (this.books[i].id === bookToDelete.id) {
        this.books.splice(i, 1);
      }
    }
  }

  validateTitle(titleToValidate, bookId) {
    this.isTitleDuplicate = false;
    if (this.validateOnlyEnglishLetters(titleToValidate)) {
      this.books.map(book => {
        if (book.volumeInfo.title.toLowerCase().trim() === titleToValidate.toLowerCase().trim() && book.id !== bookId) {
          this.isTitleDuplicate = true;
          return;
        }
        return;
      });
    }
  }

  private validateOnlyEnglishLetters(str: string): boolean {
    let reg = /^[a-zA-Z-.' ':1-9,]+$/;
    if (!reg.test(str)) {
      this.isLettersValid = false;
      return false;
    }
    return true;
  }

  private validateBookAuthors(autorsToValidate): boolean {
    if (this.validateOnlyEnglishLetters(autorsToValidate)) {
      return true;
    }
    this.isAuthorsValid = false;
    return false;
  }

  private validateDate(BookDate) {
    let thisDate = new Date();
    let bookDate = new Date(BookDate);
    if (bookDate > thisDate) {
      this.isDateValid = false;
      return false;
    }
    this.isDateValid = true;
    return true;
  }

  updateBookItem() {
    this.initValidations();
    if (this.validateBookAuthors(this.currentBook.volumeInfo.authors)) {
      for (let i = 0; i <= this.books.length; i++) {
        if (this.books[i].id === this.currentBook.id) {
          this.books[i] = this.currentBook;
          this.modalRef.hide();
        }
      }
    }
    this.modalRef.hide();
  }


  addNewBookItem() {
    this.books.push(JSON.parse(JSON.stringify(this.newBook)));
    this.initValidations();
    this.initNewBook();
    this.modalRef.hide();
  }


}

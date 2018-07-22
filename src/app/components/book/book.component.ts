import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from "@angular/core";
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import * as M from "../../app.models";
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'book',
  templateUrl: './book.component.html'
})

export class BookComponent implements OnInit {
  @Input() book: M.GoogleBook;
  @Output() edit: EventEmitter<M.GoogleBook> = new EventEmitter<M.GoogleBook>();
  newAuthors: any;
  newTitle: string;
  newDate: any;

  constructor() {}

  ngOnInit() {
    this.book.volumeInfo.publishedDate = this.formatDate(this.book.volumeInfo.publishedDate);
    this.newTitle = this.book.volumeInfo.title;
    this.newDate = this.formatDate(this.book.volumeInfo.publishedDate);
    this.newAuthors = this.book.volumeInfo.authors;
  }

  openEditPopup(){
    this.edit.emit(this.book);
  }

  private formatDate(date) {
    let d = new Date(date),
      month = d.getMonth() ? '' + (d.getMonth() + 1) : '01',
      day = d.getDay() ? '' + d.getDay() : '01',
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    let newDate = [year, month, day].join('-');
    return newDate;
  }

  // addNewBookItem(){
  //
  // }

  // saveBookItem() {
  //   this.isTitleUnique = false;
  //   this.titleValid();
  //   if (this.isTitleUnique) {
  //     this.book.volumeInfo.title = this.newTitle;
  //     this.book.volumeInfo.publishedDate = this.newDate;
  //     this.book.volumeInfo.authors = this.newAuthors;
  //     this.modalRef.hide();
  //   }
  //   else if(!this.isTitleUnique) {
  //     alert('title is a duplicate');
  //     this.modalRef.hide();
  //   }
  // }

}





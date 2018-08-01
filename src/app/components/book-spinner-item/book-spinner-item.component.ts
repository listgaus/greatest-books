import {Component, OnInit, Input, TemplateRef, Output, EventEmitter} from '@angular/core';
import * as M from '../../app.models';
import {BsModalRef} from "ngx-bootstrap/modal/bs-modal-ref.service";
import {BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'book-spinner-item',
  templateUrl: './book-spinner-item.component.html',
})
export class BookSpinnerItemComponent implements OnInit {
  @Input() book: M.GoogleBook;
  @Output() delete: EventEmitter<M.GoogleBook> = new EventEmitter<M.GoogleBook>();

  newTitle: string;
  newAuthors: any;
  newDate: any;
  modalRef: BsModalRef;
  isDateValid: boolean = true;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    // this.newTitle = JSON.parse(JSON.stringify(this.book.volumeInfo.title));
    // this.newDate = JSON.parse(JSON.stringify(this.book.volumeInfo.publishedDate));
    // this.newAuthors = JSON.parse(JSON.stringify(this.book.volumeInfo.authors[0]));
    this.newTitle = Object.assign('',this.book.volumeInfo.title);
    this.newDate = Object.assign('',this.book.volumeInfo.publishedDate);
    this.newAuthors = Object.assign('',this.book.volumeInfo.authors[0]);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  saveBookItem(){
    this.book.volumeInfo.title = this.newTitle ;
    this.book.volumeInfo.publishedDate = this.newDate;
    this.book.volumeInfo.authors = this.newAuthors;
    }

  validateDate(BookDate) {
    let thisDate = new Date();
    let bookDate = new Date(BookDate);
    if (bookDate > thisDate) {
      this.isDateValid = false;
      return false;
    }
    this.isDateValid = true;
    return true;
  }

}

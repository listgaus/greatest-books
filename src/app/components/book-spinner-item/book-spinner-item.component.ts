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

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.newTitle = this.book.volumeInfo.title;
    this.newDate = this.book.volumeInfo.publishedDate;
    this.newAuthors = this.book.volumeInfo.authors;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  saveBookItem(){
    this.book.volumeInfo.title = this.newTitle ;
    this.book.volumeInfo.publishedDate = this.newDate;
    this.book.volumeInfo.authors = this.newAuthors;
  }

  deleteBook(){
    this.delete.emit(this.book);
    this.modalRef.hide();
  }

}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NetService} from './services/net/net.service';
import {BooksService} from './services/books/books.service';
import {HeaderComponent} from './components/site-header/site-header.component';
import {BooksListComponent} from './components/books-list/books-list.component';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BookComponent} from './components/book/book.component';
import {BestBookListComponent} from './components/best-book-list/best-book-list.component';
import {DragScrollModule} from 'ngx-drag-scroll';
import {BookSpinnerItemComponent} from './components/book-spinner-item/book-spinner-item.component';
import {BookSpinnerComponent} from './components/book-spinner/book-spinner.component';
import {TitlePipe} from './pipes/capitalize-title/capitalize-title.pipe';
import {PopupModalComponent} from './components/popup-modal/popup-modal.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TruncatePipe} from './pipes/truncate/truncate.pipe';


@NgModule({
  declarations: [
    TitlePipe,
    AppComponent,
    HeaderComponent,
    BooksListComponent,
    BookComponent,
    BestBookListComponent,
    BookSpinnerComponent,
    BookSpinnerItemComponent,
    PopupModalComponent,
    SearchBarComponent,
    TruncatePipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    DragScrollModule,
    FormsModule,
  ],
  providers: [
    BooksService,
    NetService
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    BooksListComponent
  ]
})
export class AppModule {
}


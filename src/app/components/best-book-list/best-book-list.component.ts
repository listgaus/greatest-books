import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'best-book-list',
  templateUrl: './best-book-list.component.html',
})
export class BestBookListComponent implements OnInit {
  @Input() books: any[];

  constructor() { }

  ngOnInit() {
  }

}

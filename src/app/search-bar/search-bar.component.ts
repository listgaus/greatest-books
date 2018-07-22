import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {
  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  timerRef;

  constructor() {}

  runFilter($event) {
    if (this.timerRef) {
      clearTimeout(this.timerRef);
    }
    this.timerRef = setTimeout(() => {
      this.valueChange.emit($event);
    }, 300);
  }

  clearFilter() {
    this.value = '';
    this.valueChange.emit('');
  }
}

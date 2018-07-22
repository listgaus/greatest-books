import { Component } from '@angular/core';

@Component({
  selector: 'popup-modal',
  templateUrl: './popup-modal.component.html'
})
export class PopupModalComponent {
  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
}

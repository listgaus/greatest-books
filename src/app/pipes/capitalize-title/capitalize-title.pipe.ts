import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booktitle'
})
export class TitlePipe implements PipeTransform {

  transform(value: any): string {
    if (value) {
      let newTitle = this.changeToTitleCase(value);
      newTitle = this.removeSings(newTitle);
      return newTitle;
    }
    return value

  }

  changeToTitleCase(value): string {
    return value.replace(/\b\w/g, txt => {
      return txt.toUpperCase();
    });
  }

  removeSings(value) {
    return value.replace(/[^\w\s]/gi, '');
  }
}

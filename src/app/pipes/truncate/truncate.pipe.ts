import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ellipsis = '...') {
    if (value) {
      let limit = value.substr(0, 150).lastIndexOf(' ');
      return `${value.substr(0, limit)}${ellipsis}`;
    }
    return value = 'This book has no description';
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, search = '') {
    if (!search) {
      return value;
    }
    const filtredArray = [];
    for (const item of value) {
      if (item.name.includes(search)) {
        filtredArray.push(item);
      }
    }
    return filtredArray;
  }
}

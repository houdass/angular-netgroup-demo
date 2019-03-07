import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  pure: true
})
export class CustomPipe implements PipeTransform {
  transform(value: string, delimiter = '#') {
    return `${delimiter} ${value} ${delimiter}`;
  }
}

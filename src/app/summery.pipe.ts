import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summery'
})
export class SummeryPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    if (value === null)
      return;

    let valueLength = 10;
    if (args != null)
      valueLength = args;

    return value.substring(0, valueLength)+ "..."
  }
}

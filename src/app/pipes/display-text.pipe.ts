import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayText'
})
export class DisplayTextPipe implements PipeTransform {

  transform(value: string, list: Array<any>, key: string = 'id', text: string = 'name'): any {
    return (list.filter(item => {
      return item[key] === value;
    })[0] || {})[text] || value;
  }

}

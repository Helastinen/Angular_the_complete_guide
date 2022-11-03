import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): unknown {
    if (value.length === 0 ||  filterString === '') {
      return value;
    }
    /*const results = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        results.push(item);
      }
    }
    return results;*/
    return value.filter(item => item[propName] === filterString)
  }
}

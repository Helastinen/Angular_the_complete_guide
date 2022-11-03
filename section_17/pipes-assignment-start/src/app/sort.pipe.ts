import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: any): unknown {
    return value.sort((a, b) => {
      const serverNameA = a.name.toLowerCase();
      const serverNameB = b.name.toLowerCase();
      if (serverNameA < serverNameB) {
        return -1;
      }
      if (serverNameA > serverNameB) {
        return 1;
      }
      return 0;
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    let result;

    result = items.filter((it) => {
      if (it.groupName) {
        return it.groupName.toLocaleLowerCase().includes(searchText);
      }
      return it.title.toLocaleLowerCase().includes(searchText);
    });

    if (result.length > 0) {
      return result;
    }
    return [-1];
  }
}

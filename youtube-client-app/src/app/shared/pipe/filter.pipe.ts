import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/youtube-response.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(value: Array<SearchItem>, field: string): Array<SearchItem> {
    return value.filter((el) => el.snippet.title.indexOf(field) > 0);
  }

}

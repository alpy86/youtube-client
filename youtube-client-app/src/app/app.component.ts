import { Component } from '@angular/core';
import { youtubeResponse } from './mock-response';
import { YoutubeResponse, SearchItem } from './models/youtube-response.model';
import { FilterPipe } from './share/pipe/filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ FilterPipe ]
})
export class AppComponent {
  private response: YoutubeResponse = youtubeResponse;
  public title: string = 'youtube-client-app';
  public responseDetails: Array<SearchItem> = [];

  public viewSortMenu: boolean = false;
  public viewSearchCards: boolean = false;

  constructor(private filterPipe: FilterPipe) {
  }

  public getSortMenu(toggle: boolean): void {
    if (this.viewSortMenu !== toggle) {
      this.viewSortMenu = true;
    } else {
      this.viewSortMenu = false;
    }
  }

  public getSearchCards(value: string): void {
    this.responseDetails = this.response.items;
  }

  public getSortCardsByDate(): void {
    this.responseDetails = this.response.items.sort((a, b) =>
      a.snippet.publishedAt > b.snippet.publishedAt ? -1 : 1);
  }

  public getSortCardsByViews(): void {
    this.responseDetails = this.response.items.sort((a, b) =>
      Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
  }

  public getSortCardsByWord(value: string): void {
    if (!value) {
      this.responseDetails = this.response.items;
    } else {
      this.responseDetails = this.filterPipe.transform(this.response.items, value);
    }
  }
}

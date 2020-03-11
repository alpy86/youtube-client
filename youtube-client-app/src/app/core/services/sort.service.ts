import { Injectable } from '@angular/core';

import { SearchItem, YoutubeResponse } from 'src/app/youtube/models/youtube-response.model';
import { HttpService } from './http.service';

@Injectable()

export class SortService {
  private response: YoutubeResponse;
  public title: string = 'youtube-client-app';
  public responseDetails: Array<SearchItem> = [];
  // public currentValue: string;

  constructor (private httpService: HttpService) { }

  public getSortCardsByDate(): void {
    this.response = this.httpService.getResponse();

    this.responseDetails = this.response.items.sort((a, b) =>
      a.snippet.publishedAt > b.snippet.publishedAt ? -1 : 1);

    this.httpService.transferData(this.responseDetails);
  }

  public getSortCardsByViews(): void {
    this.response = this.httpService.getResponse();

    this.responseDetails = this.response.items.sort((a, b) =>
      Number(b.statistics.viewCount) - Number(a.statistics.viewCount));

    this.httpService.transferData(this.responseDetails);
  }

  public getSortCardsByWord(value: string): void {
    this.response = this.httpService.getResponse();

    if (!value) {
      this.responseDetails = this.response.items;
    } else {
      this.responseDetails = this.response.items.filter((el) => el.snippet.title.indexOf(value) > 0);
    }

    this.httpService.transferData(this.responseDetails);
  }
}

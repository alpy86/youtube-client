import { Injectable } from '@angular/core';
import { YoutubeResponse, SearchItem } from 'src/app/youtube/models/youtube-response.model';
import { youtubeResponse } from 'src/app/youtube/mock-response';

@Injectable()
export class SortService {
  private response: YoutubeResponse = youtubeResponse;
  public title: string = 'youtube-client-app';
  public responseDetails: Array<SearchItem> = [];


  constructor() {
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
    // if (!value) {
    //   this.responseDetails = this.response.items;
    // } else {
    //   this.responseDetails = this.filterPipe.transform(this.response.items, value);
    // }
  }

  public getResponseDetails(): SearchItem[] {
    return this.responseDetails;
  }
}

import { Injectable } from '@angular/core';
import { YoutubeResponse, SearchItem } from 'src/app/youtube/models/youtube-response.model';
import { youtubeResponse } from 'src/app/youtube/mock-response';
import { Router } from '@angular/router';

@Injectable()
export class SortService {
  private response: YoutubeResponse = youtubeResponse;
  public title: string = 'youtube-client-app';
  public responseDetails: Array<SearchItem> = [];
  public currentValue: string;

  constructor (public router: Router) { }

  public getSearchCards(): SearchItem[] {
    return this.response.items;
  }

  public goToSearchCards(value: string): void {
    if (value.length) {
      this.router.navigate(['main', value]);
    }
    this.currentValue = value;
  }

  public goToBackListCards(): void {
    if (this.currentValue) {
      this.router.navigate(['main', this.currentValue]);
    }
  }

  public getSortCardsByDate(): void {
    this.responseDetails = this.response.items.sort((a, b) =>
      a.snippet.publishedAt > b.snippet.publishedAt ? -1 : 1);
  }

  public getSortCardsByViews(): void {
    this.responseDetails = this.response.items.sort((a, b) =>
      Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
  }

  public getSortCardsByWord(value: SearchItem[]): void {
    if (!value) {
      this.responseDetails = this.response.items;
    } else {
      this.responseDetails = [].concat(value);
    }
  }
}

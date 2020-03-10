import { Injectable } from '@angular/core';
import { YoutubeResponse, SearchItem } from 'src/app/youtube/models/youtube-response.model';
import { youtubeResponse } from 'src/app/youtube/mock-response';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Injectable()
export class SortService {
  private response: YoutubeResponse;
  public title: string = 'youtube-client-app';
  public responseDetails: Array<SearchItem> = [];
  public currentValue: string;

  constructor (public router: Router,
    private httpService: HttpService) { }

  // public getSearchCards(): SearchItem[] {
  //   return this.response.items;
  // }

  // public goToSearchCards(value: string): void {
  //   if (value.length) {
  //     this.router.navigate(['main', value]);
  //   }
  //   this.currentValue = value;
  // }

  // public goToBackListCards(): void {
  //   if (this.currentValue) {
  //     this.router.navigate(['main', this.currentValue]);
  //   }
  // }

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
    // const cards: SearchItem[] = this.sortService.getSearchCards();
    // const filterCards: SearchItem[] = cards.filter((el) => el.snippet.title.indexOf(value) > 0);
    // this.sortService.getSortCardsByWord(filterCards);
  }
}

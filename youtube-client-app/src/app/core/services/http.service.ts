import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';

import { YoutubeResponse, SearchItem } from 'src/app/youtube/models/youtube-response.model';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  public data: Array<SearchItem>;
  public dataId: Array<string>;
  public response: YoutubeResponse;
  // public searchValue: string;
  public valueCards$: BehaviorSubject<Array<SearchItem>> = new BehaviorSubject<Array<SearchItem>>([]);
  public valueCards: Observable<Array<SearchItem>> = this.valueCards$.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  // setSearchValue(value: string): void {
  //   this.searchValue = value;
  //   if (!this.step) {
  //     this.router.navigate(['main']);
  //   }
  //   this.step += 1;
  //   this.getData(this.searchValue);
  // }

  getData(value: string): void {
    let url = `type=video&part=snippet&maxResults=15&q=${value}`;

    this.http.get(url).subscribe((values: YoutubeResponse) => {
      this.dataId = values.items.map((el: any) => el = el.id.videoId);
      let urlNext = `id=${this.dataId.join(',')}&part=snippet,statistics`;

      this.http.get(urlNext).subscribe((data: YoutubeResponse) => {
        this.valueCards$.next(data.items);
        this.response = data;
      });
    });
  }

  getResponse(): YoutubeResponse {
    return this.response;
  }

  // goToBackListCards(): void {
  //   this.router.navigate(['main']);
  // }

  transferData(value: Array<SearchItem>) {
    this.valueCards$.next(value);
  }
}

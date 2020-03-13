import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { YoutubeResponse, SearchItem } from 'src/app/youtube/models/youtube-response.model';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private dataId: Array<string>;
  public response: YoutubeResponse;
  public valueCards$: BehaviorSubject<Array<SearchItem>> = new BehaviorSubject<Array<SearchItem>>([]);
  public valueCards: Observable<Array<SearchItem>> = this.valueCards$.asObservable();

  constructor(private http: HttpClient) { }

  public getData(value: string): void {
    // tslint:disable-next-line
    let url: string = `type=video&part=snippet&maxResults=15&q=${value}`;

    this.http.get(url).subscribe((values: YoutubeResponse) => {
      // tslint:disable-next-line
      this.dataId = values.items.map((el: any) => el = el.id.videoId);
      // tslint:disable-next-line
      let urlNext: string = `id=${this.dataId.join(',')}&part=snippet,statistics`;

      this.http.get(urlNext).subscribe((data: YoutubeResponse) => {
        this.valueCards$.next(data.items);
        this.response = data;
      });
    });
  }

  public getResponse(): YoutubeResponse {
    return this.response;
  }

  public transferData(value: Array<SearchItem>): void {
    this.valueCards$.next(value);
  }
}

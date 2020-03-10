import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { YoutubeResponse, SearchItem } from 'src/app/youtube/models/youtube-response.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public searchValue: string = 'auto';
  public step: number = 0;
  public dataId: Array<string>;
  public data: Array<SearchItem>;
  public valueCards$: BehaviorSubject<Array<SearchItem>> = new BehaviorSubject<Array<SearchItem>>([]);
  public valueCards: Observable<Array<SearchItem>> = this.valueCards$.asObservable();
  public response: YoutubeResponse;
  // private searchSubject = new Subject<any>();
  constructor(private http: HttpClient, public router: Router) {

  }



  setSearchValue(value: string): void {
    this.searchValue = value;
    if (!this.step) {
      this.router.navigate(['main']);
    }
    this.step += 1;
    this.getData(this.searchValue);
  }

  getResponse(): YoutubeResponse {
    return this.response;
  }

  goToBackListCards(): void {
    this.router.navigate(['main']);
    this.getData(this.searchValue);
  }

  getData(value: string): void {
    let url = `type=video&part=snippet&maxResults=15&q=${value}`;
    console.log(url);
    this.http.get(url).subscribe((values: YoutubeResponse) => {
      console.log(values.items);
      this.dataId = values.items.map((el: any) => el = el.id.videoId);
      console.log(this.dataId);
      let urlNext = `id=${this.dataId.join(',')}&part=snippet,statistics`;
      console.log(urlNext);
      this.http.get(urlNext).subscribe((data: YoutubeResponse) => {
        this.valueCards$.next(data.items);
        this.response = data;
      });
    });
  }

  transferData(value: Array<SearchItem>) {
    this.valueCards$.next(value);
  }



  //   setSearchSubject(value: string) {
//     this.searchSubject.next(value);
// }

//   getSearchSubject(): Observable<any> {
//     return this.searchSubject.asObservable();
// }


  // getList(): any {
  //   console.log(environment.baseUrl);
  //   this.getData()
  //     .subscribe((data: any) => {
  //       this.data = data;
  //       console.log(this.data);
  //       return this.data;
  //     });
  // }

  // getData(value?: string): any {
  //   let url = `${environment.baseUrl}/search?key=${environment.key}&type=video&part=snippet&maxResults=15&q=${value}`;
  //   console.log(url);
  //   return this.http.get(url).subscribe(data => {
  //     return this.http.get(`${environment.baseUrl}/videos?key=${environment.key}&id=nq4aU9gmZQk&part=snippet,statistics`);
  //   });
  // }

    // .pipe(
    //   map((r) => {
    //   console.log(r);
    //   return r;
    // }));

      // .pipe(
      //   retry(2));


// getList(): Observable<Student> {
//   return this.http
//     .get<Student>(this.base_path)
//     .pipe(
//       retry(2),
//       catchError(this.handleError)
//     )
// }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { YoutubeResponse } from 'src/app/youtube/models/youtube-response.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // public searchValue: string = 'auto';
  private searchSubject = new Subject<any>();
  constructor(private http: HttpClient, public router: Router) {

  }

  setSearchSubject(value: string) {
    this.searchSubject.next(value);
}

  // setSearchValue(value: string): void {
  //   this.searchValue = value;
  // }

  // getSearchValue(): string {
  //   return this.searchValue;
  // }

  getSearchSubject(): Observable<any> {
    return this.searchSubject.asObservable();
}


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

import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SearchItem, YoutubeResponse } from '../../models/youtube-response.model';
import { Card } from '../../models/card.model';
import { ActivatedRoute } from '@angular/router';
import { SortService } from 'src/app/core/services/sort.service';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss'],
  providers: [HttpService]
})
export class ListCardsComponent implements OnInit {
  public cardItem: Card;
  public searchedList: Array<SearchItem>;
  public dataId: Array<string>;
  public data: Array<SearchItem>;
  private searchValue: Observable<any>;

  constructor(private httpService: HttpService, public route: ActivatedRoute, private http: HttpClient) { }

  public ngOnInit(): void {
    // this.searchedList = this.sortService.getSearchCards();
    this.searchValue = this.httpService.getSearchSubject();
    let url = `${environment.baseUrl}/search?key=${environment.key}&type=video&part=snippet&maxResults=15&q=${this.searchValue}`;
    console.log(url);
    this.http.get(url).subscribe((values: YoutubeResponse) => {
      console.log(values.items);
      this.dataId = values.items.map((el: any) => el = el.id.videoId);
      console.log(this.dataId);
      let urlNext = `${environment.baseUrl}/videos?key=${environment.key}&id=${this.dataId.join(',')}&part=snippet,statistics`;
      console.log(urlNext);
      this.http.get(urlNext).subscribe((data: YoutubeResponse) => {
        this.searchedList = data.items;
      });
    });
  }

  // private getData(): void {
  //   this.httpService.getData().subscribe(
  //     (data) => {
  //       this.data = data;
  //     });
  // }
    //  this.httpService.getList().subscribe((data: any) => {
    //   this.searchedList = data.items;
    //   console.log(this.searchedList);
    //  });

}

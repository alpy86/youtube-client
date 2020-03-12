import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CardDetail } from '../../models/card.model';
import { SearchItem } from '../../models/youtube-response.model';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {
  public card: CardDetail;
  public datePublish: string;
  public cards: SearchItem[];
  public id: Object;
  public thumbnails: Object;

  constructor(
    public router: Router,
    private activateRoute: ActivatedRoute,
    private httpService: HttpService
    ) {
    this.id = activateRoute.snapshot.params.id;
  }

  public ngOnInit(): void {
    this.httpService.valueCards.subscribe(data => this.cards = data);
    let filterArrCards: SearchItem[] = this.cards.filter((val) => val.snippet.channelId === this.id);
    this.card = filterArrCards[0];
    console.log(this.card);
    this.datePublish = this.card.snippet.publishedAt;
    this.thumbnails = this.card.snippet.thumbnails.standard || this.card.snippet.thumbnails.high;
  }

  // public goToBackListCards(): void {
  //   this.sortService.goToBackListCards();
  // }
  public goToBackListCards(): void {
    // this.httpService.goToBackListCards();
    this.router.navigate(['main']);
  }
}

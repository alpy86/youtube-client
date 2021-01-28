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

  public cards: SearchItem[];
  public datePublish: string;
  public id: Object;
  public thumbnails: Object;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private httpService: HttpService
    ) {
    this.id = activateRoute.snapshot.params.id;
  }

  public ngOnInit(): void {
    this.httpService.valueCards.subscribe(data => this.cards = data);
    let filterArrCards: SearchItem[] = this.cards.filter((val) => val.snippet.channelId === this.id);
    this.card = filterArrCards[0];
    this.datePublish = this.card.snippet.publishedAt;
    this.thumbnails = this.card.snippet.thumbnails.standard || this.card.snippet.thumbnails.high;
  }

  public goToBackListCards(): void {
    this.router.navigate(['main']);
  }
}

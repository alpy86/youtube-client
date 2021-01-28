import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SortService } from 'src/app/core/services/sort.service';
import { CardDetail } from '../../models/card.model';
import { SearchItem } from '../../models/youtube-response.model';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {
  @Input() public card: CardDetail;
  public datePublish: string;

  public id: Object;

  constructor(
    public router: Router,
    private activateRoute: ActivatedRoute,
    private sortService: SortService) {
    this.id = activateRoute.snapshot.params.id;
  }

  public ngOnInit(): void {
    let cards: SearchItem[] = this.sortService.getSearchCards();
    let filterArrCards: SearchItem[] = cards.filter((val) => val.snippet.channelId === this.id);
    this.card = filterArrCards[0];
    this.datePublish = this.card.snippet.publishedAt;
  }

  public goToBackListCards(): void {
    this.sortService.goToBackListCards();
  }
}

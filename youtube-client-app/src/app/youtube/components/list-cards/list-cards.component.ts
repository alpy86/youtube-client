import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SearchItem } from '../../models/youtube-response.model';
import { Card } from '../../models/card.model';
import { ActivatedRoute } from '@angular/router';
import { SortService } from 'src/app/core/services/sort.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit {
  public cardItem: Card;
  public searchedList: Array<SearchItem>;

  constructor(private sortService: SortService, public route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.searchedList = this.sortService.getSearchCards();
  }
}

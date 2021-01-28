import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/core/services/http.service';
import { Card } from '../../models/card.model';
import { SearchItem } from '../../models/youtube-response.model';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss'],
})

export class ListCardsComponent implements OnInit {
  public cardItem: Card;
  public searchedList: Array<SearchItem>;

  constructor(private httpService: HttpService) { }

  public ngOnInit(): void {
    this.httpService.valueCards.subscribe((data: Array<SearchItem>) => this.searchedList = data);
  }
}

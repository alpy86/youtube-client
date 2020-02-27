import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/youtube-response.model';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit {
  @Input() public searchedList: Array<SearchItem>;

  public cardItem: Card;

  constructor() {
  }

  public ngOnInit(): void {
  }
}

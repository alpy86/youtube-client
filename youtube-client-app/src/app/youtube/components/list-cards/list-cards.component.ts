import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../../models/youtube-response.model';
import { Card } from '../../models/card.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit {
  // @Input() public searchedList: Array<SearchItem>;

  public cardItem: Card;
  public searchedList: Array<SearchItem>;

  constructor(public route: ActivatedRoute) {}

  public ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    // this.searchedList = this.sortService.getSearchCards();
  }
}

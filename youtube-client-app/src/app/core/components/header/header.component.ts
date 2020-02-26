import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { YoutubeResponse, SearchItem } from 'src/app/youtube/models/youtube-response.model';
import { youtubeResponse } from 'src/app/youtube/mock-response';
import { FilterPipe } from 'src/app/shared/pipe/filter.pipe';
import { SortService } from '../../services/sort.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // @Output() public onClickSearchCards: EventEmitter<string> = new EventEmitter();

  public viewSortMenu: boolean = false;
  public viewSearchCards: boolean = false;
  public inputSearch: string = '';

  constructor (private sortService: SortService, public router: Router) {

  };

  public toggleSortMenu(): void {
    this.viewSortMenu = !this.viewSortMenu;
  }

  // public searchCards(): void {
  //   this.onClickSearchCards.emit(this.inputSearch);
  // }

  public getSortCardsByDate(): void {
    this.sortService.getSortCardsByDate();
  }

  public getSortCardsByViews(): void {
    this.sortService.getSortCardsByViews();
  }

  public getSortCardsByWord(value: string): void {
    this.sortService.getSortCardsByWord(value);
  }

  public ngOnInit(): void {
  }

  public goToSearchCards(): void {
    if (this.inputSearch.length) {
      this.router.navigate(['main'], { queryParams: { search: this.inputSearch } });
    }
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public onToggleSortMenu: EventEmitter<boolean> = new EventEmitter();
  @Output() public onClickSearchCards: EventEmitter<string> = new EventEmitter();

  public inputSearch: string = '';

  constructor() { }

  public ngOnInit(): void {
  }

  public toggleSortMenu(): void {
    this.onToggleSortMenu.emit(true);
  }

  public searchCards(): void {
    this.onClickSearchCards.emit(this.inputSearch);
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onToggleSortMenu: EventEmitter<boolean> = new EventEmitter();
  toggleSortMenu(): void {
    this.onToggleSortMenu.emit(true);
  }

  constructor() { }

  public ngOnInit(): void {
  }

}

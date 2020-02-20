import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'youtube-client-app';
  viewSortMenu: boolean = false;
  getSortMenu(toggle: boolean) {
    if (this.viewSortMenu !== toggle) {
      console.log(this.viewSortMenu, toggle);
      this.viewSortMenu = true;
    }
    else {
      this.viewSortMenu = false;
    }
  }
}

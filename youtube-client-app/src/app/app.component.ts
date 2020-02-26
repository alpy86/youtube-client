import { Component } from '@angular/core';
import { SortService } from './core/services/sort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor (private sortService: SortService) {

  };

  // public getSearchCards(value: string): void {
  //   this.sortService.getSearchCards(value);
  // }

  // public getResponseDetails(): void {
  //   this.sortService.getResponseDetails();
  // }
}

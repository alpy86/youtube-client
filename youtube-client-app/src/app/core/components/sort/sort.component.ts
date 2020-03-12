import { Component, OnInit } from '@angular/core';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})

export class SortComponent implements OnInit {

  public inputSort: string = '';
  // @Output() public onInputSort: EventEmitter<string> = new EventEmitter();
  constructor(private sortService: SortService) { }

  public ngOnInit(): void {
  }

  public sortByDate(): void {
    this.sortService.getSortCardsByDate();
  }

  public sortByViews(): void {
    this.sortService.getSortCardsByViews();
  }

  public sortByWord(): void {
    this.sortService.getSortCardsByWord(this.inputSort);
  }
}

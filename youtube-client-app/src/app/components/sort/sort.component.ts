import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  @Output() public onClickSortByDate: EventEmitter<void> = new EventEmitter();
  @Output() public onClickSortByViews: EventEmitter<void> = new EventEmitter();
  @Output() public onInputSort: EventEmitter<string> = new EventEmitter();

  public inputSort: string = '';

  constructor() { }

  public ngOnInit(): void {
  }

  public sortByDate(): void {
    this.onClickSortByDate.emit();
  }

  public sortByViews(): void {
    this.onClickSortByViews.emit();
  }

  public sortByWord(): void {
    this.onInputSort.emit(this.inputSort);
  }
}

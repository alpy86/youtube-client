import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { SortByDateDirective } from './directive/sort-by-date.directive';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [
    FilterPipe,
    SortByDateDirective
  ],
  exports: [
    FilterPipe,
    SortByDateDirective
  ]
})
export class SharedModule { }

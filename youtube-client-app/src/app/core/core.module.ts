import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SortComponent } from './components/sort/sort.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './pages/not-found/not-found.component';



@NgModule({
  declarations: [ HeaderComponent, SortComponent, NotFoundComponent ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [HeaderComponent, NotFoundComponent]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SortComponent } from './components/sort/sort.component';

@NgModule({
  declarations: [ HeaderComponent, SortComponent, NotFoundComponent ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [HeaderComponent, NotFoundComponent]
})

export class CoreModule { }

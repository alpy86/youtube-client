import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { DetailInfoComponent } from './pages/detail-info/detail-info.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CardComponent,
    ListCardsComponent,
    DetailInfoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [ListCardsComponent]
})
export class YoutubeModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { DetailInfoComponent } from './youtube/pages/detail-info/detail-info.component';
import { ListCardsComponent } from './youtube/components/list-cards/list-cards.component';

const routes: Routes = [
  { path: 'main', component: ListCardsComponent },
  { path: 'main/:id', component: DetailInfoComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

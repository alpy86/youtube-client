import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { DetailInfoComponent } from './pages/detail-info/detail-info.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'main/:search',
    component: ListCardsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detail/:id',
    component: DetailInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YouTubeRoutingModule { }

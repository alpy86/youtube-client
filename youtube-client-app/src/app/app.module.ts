import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SortComponent } from './components/sort/sort.component';
import { AuthComponent } from './components/auth/auth.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { CardComponent } from './components/card/card.component';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortComponent,
    AuthComponent,
    ListCardsComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

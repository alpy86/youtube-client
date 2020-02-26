import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { YoutubeModule } from './youtube/youtube.module';

import { AppComponent } from './app.component';

import { SortService } from './core/services/sort.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    CoreModule,
    SharedModule,
    YoutubeModule
  ],
  providers: [ SortService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

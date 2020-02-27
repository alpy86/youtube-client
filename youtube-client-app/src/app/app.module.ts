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
import { AuthGuard } from './core/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    CoreModule,
    SharedModule,
    YoutubeModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard, SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }

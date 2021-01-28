import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [ AuthComponent ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  exports: [ AuthComponent ]
})
export class AuthModule { }

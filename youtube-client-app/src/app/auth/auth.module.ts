import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [ AuthComponent ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  exports: [ AuthComponent ]
})

export class AuthModule { }

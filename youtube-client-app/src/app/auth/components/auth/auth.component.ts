import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { Subject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public login: string;
  public password: string;
  // public observe: Subject<T>;

  constructor (private router: Router, private authService: AuthService) { }

  public ngOnInit(): void {
  }

  public onSubmit(form: NgForm): void {
    this.authService.setToken(form.value.login);
    this.router.navigate(['']);
  }


}

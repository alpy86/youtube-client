import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpService } from '../../services/http.service';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  @ViewChild('inputTag', { static: false }) public inputElem: ElementRef;

  public inputSearch: string = '';
  public isAuth: boolean = false;
  public stateLogin: string = 'Login';
  public viewSortMenu: boolean = false;

  constructor(
    private authService: AuthService,
    private httpService: HttpService,
  ) { }

  public ngOnInit(): void {
    this.authService.isLocalStorageValue();

    this.authService.isLogin.subscribe(data => {
      this.isAuth = data;

      if (this.isAuth) {
        this.stateLogin = 'Logout';
      } else {
        this.stateLogin = 'Login';
        this.inputSearch = '';
      }
    });
  }

  public ngAfterViewInit(): void {
    fromEvent(this.inputElem.nativeElement, 'keyup')
      .pipe(
        debounceTime(700),
        map((event: InputEvent) => (<HTMLInputElement>event.target).value),
        filter(value => value.length > 2),
        distinctUntilChanged(),
      )
      .subscribe(value => {
        this.httpService.getData(value);
      });
  }

  public clearLogin(): void {
    if (this.isAuth) {
      this.authService.clearLogin();
    }
  }

  public toggleSortMenu(): void {
    this.viewSortMenu = !this.viewSortMenu;
  }
}

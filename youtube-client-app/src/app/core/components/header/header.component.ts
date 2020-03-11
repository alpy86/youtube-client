import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { FilterPipe } from 'src/app/shared/pipe/filter.pipe';
import { SortService } from '../../services/sort.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchItem, YoutubeResponse } from 'src/app/youtube/models/youtube-response.model';
import { HttpService } from '../../services/http.service';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('inputTag', { static: false }) inputElem: any;

  public viewSortMenu: boolean = false;
  public viewSearchCards: boolean = false;
  public inputSearch: string = '';
  public isAuth: boolean = false;

  constructor(
    private authService: AuthService,
    private httpService: HttpService,
    public router: Router
  ) {
  }

  public ngOnInit(): void {
    this.authService.isLocalStorageValue();
    this.authService.isLogin.subscribe(data => this.isAuth = data);
  }

  public ngAfterViewInit(): void {
    fromEvent(this.inputElem.nativeElement, 'keyup')
      .pipe(
        debounceTime(700),
        map((event: InputEvent) => (<HTMLInputElement>event.target).value),
        filter(val => val.length > 2),
        distinctUntilChanged(),
      )
      .subscribe(evt => {
        this.httpService.setSearchValue(evt);
      });
  }

  public toggleSortMenu(): void {
    this.viewSortMenu = !this.viewSortMenu;
  }

  // public initSearch(): void {
  //   if (this.inputSearch.length > 2) {
  //     this.httpService.setSearchValue(this.inputSearch);
  //   }
  // }

  public clearLogin(): void {
    this.authService.clearLogin();
  }
}

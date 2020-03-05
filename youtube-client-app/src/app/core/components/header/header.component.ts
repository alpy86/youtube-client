import { Component, OnInit } from '@angular/core';
// import { FilterPipe } from 'src/app/shared/pipe/filter.pipe';
import { SortService } from '../../services/sort.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchItem, YoutubeResponse } from 'src/app/youtube/models/youtube-response.model';
import { HttpService } from '../../services/http.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public viewSortMenu: boolean = false;
  public viewSearchCards: boolean = false;
  public inputSearch: string = '';
  public isButtonLogout: boolean = false;


  constructor (
    private sortService: SortService,
    private authService: AuthService,
    private httpService: HttpService,
    // private filterPipe: FilterPipe,
    public router: Router) { }

  public ngOnInit(): void {
  }

  public toggleSortMenu(): void {
    this.viewSortMenu = !this.viewSortMenu;
  }

  public initSearch(): void {
    if (this.inputSearch.length > 3) {
      this.httpService.setSearchSubject(this.inputSearch);
      this.router.navigate(['main']);
    }
  }

  // this.authService.isLogin.subscribe(data => this.isButtonLogout = data);

  public clearLogin(): void {
    this.authService.clearLogin();
  }

  public getSortCardsByWord(value: string): void {
    const cards: SearchItem[] = this.sortService.getSearchCards();
    const filterCards: SearchItem[] = cards.filter((el) => el.snippet.title.indexOf(value) > 0);
    this.sortService.getSortCardsByWord(filterCards);
  }
}

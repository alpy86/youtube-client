import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private token: string;
  public login$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLogin: Observable<boolean> = this.login$.asObservable();

  constructor(private router: Router) { }

  public setToken(name: string): void {
    this.token = `${name}${Math.floor(Math.random() * Date.now())}`;
    localStorage.setItem('loginToken', this.token);
    this.setStateLogin(true);
    this.router.navigate(['main']);
  }

  public isLocalStorageValue(): void {
    if (localStorage.getItem('loginToken')) {
      this.setStateLogin(true);
    } else {
      this.router.navigate(['auth']);
    }
  }

  public clearLogin(): void {
    localStorage.removeItem('loginToken');
    this.setStateLogin(false);
    this.router.navigate(['auth']);
  }

  public setStateLogin(login: boolean): void {
    this.login$.next(login);
  }
}

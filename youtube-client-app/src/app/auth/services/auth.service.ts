import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;
  public login$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLogin = this.login$.asObservable();

  constructor() { }

  public setToken(name: string): void {
    this.token = `${name}${Math.floor(Math.random() * Date.now())}`;
    localStorage.setItem('loginToken', this.token);
    console.log(this.token);
    this.setStateLogin(true);
  }

  public clearLogin(): void {
    localStorage.removeItem('loginToken');
    this.setStateLogin(false);
  }

  public setStateLogin(login: boolean) {
    this.login$.next(login);
  }
}

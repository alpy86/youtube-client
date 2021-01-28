import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;

  constructor() { }

  public setToken(name: string): void {
    this.token = `${name}${Math.floor(Math.random() * Date.now())}`;
    localStorage.setItem('loginToken', this.token);
    console.log(this.token);
  }

  public clearLogin(): void {
    localStorage.removeItem('loginToken');
  }
}

import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanLoad {
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
      // if (localStorage.getItem('loginToken')) {
      //   return true;
      // }
      // return false;
      return !!localStorage.getItem('loginToken');
  }
  public canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      // if (localStorage.getItem('loginToken')) {
      //   return true;
      // }
      // return false;
      return !!localStorage.getItem('loginToken');
  }
}

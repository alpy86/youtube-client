import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.indexOf('type=video') > -1) {
      return next.handle(
        request.clone({
        url: `${environment.API_URL}/search?key=${environment.API_TOKEN}&${request.url}`
      }));
    } else if (request.url.indexOf('id=') > -1) {
      return next.handle(
        request.clone({
        url: `${environment.API_URL}/videos?key=${environment.API_TOKEN}&${request.url}`
      }));
    } else {
      return next.handle(request);
    }
  }
}

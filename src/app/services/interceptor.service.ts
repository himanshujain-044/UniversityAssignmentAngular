import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams,
} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';

import { LoginUser } from './login.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: LoginUser) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        // console.log(user);
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${user.token}`),
        });

        return next.handle(modifiedReq);
      })
    );
  }
}

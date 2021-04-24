import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Injectable} from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Injectable() 
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthentificationService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authenticationService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.token;
    if (isLoggedIn) {
        const authReq = req.clone({
          headers: req.headers.append('Authorization', `Bearer ${currentUser.token}`)
        });
        return next.handle(authReq);
      }
      return next.handle(req);
    }
}
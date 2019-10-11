import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import {AuthService} from '../_services/auth.service'


@Injectable({providedIn: 'root'})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401){
        //auto logout if 401 response returned from api
        this.authenticationService.logout();
        location.reload(true)
      }

      const error = err.error.message || err.statusText
      return throwError(error)
    }))
  }
}

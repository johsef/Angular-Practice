import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import {AuthService} from '../_services/auth.service'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor (private authenticationService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   //add authorization header with jwt token if available

   let currentUser = this.authenticationService.currentUserValue
   if(currentUser && currentUser.token){
     req = req.clone({
      setHeaders:{
        Authorization: `Bearer ${currentUser.token}`
      }
       })

   }

    return next.handle(req);
  }
}

import{ Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse,HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators'

//array in local storage for Registered students

// let users = JSON.parse(localStorage.getItem('students')) ||[]

let users = [{id: 1, firstName: 'James', lastName: 'Handerson', username: 'admin', password: 'admin'}]


@Injectable()

export class BackendInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, headers, body} = req

    //wrap in delayed observable to simulate server api call
  return of(null)
  .pipe(mergeMap(handleRoute))
  .pipe(materialize())// call materialize and dematerialize to ensure delay if an error is thrown
  .pipe(delay(500))
  .pipe(dematerialize())


  function handleRoute(){
    switch(true){
      case url.match('^http\:\/\/localhost\:4200\/students\/authenticate') && method === 'POST':
        return authenticate()
      case url.endsWith('/students') && method ==='GET':
        return getUsers()
      default:
        return next.handle(req)
        // case url.endsWith('/students/register') && method === 'POST':
      //   return register()
    }
  }
  //Route functions

  function authenticate(){
    const {username, password} = body
    const user = users.find(x => x.username === username && x.password === password )
    // if (!user) return error('Username or password incorrect')
    // else{ success('Login Successful')
    return ok({
      id: user.id,
      firstName: user.firstName,
      username: user.username,
      password: user.password,
      token: 'secret'
    })
  }
  // }

  //helper function
  function ok(body?){
    return of(new HttpResponse({status: 200, body}))
  }
  function getUsers(){
    if (!isLoggedIn()) return unauthorised()
    return ok(users)
  }
    function isLoggedIn(){
      return headers.get('Authorization') === 'Bearer secret'

    }
    function unauthorised(){
      return throwError({status: 401, error: {message: 'Unauthorized'}})
    }
    // function error(message){
    //   return throwError({error:{message}})
    // }
    // function success(message){
    //   return throwError({error : {message}});

    // }

}
}

export const backendProvider = {
provide: HTTP_INTERCEPTORS,
useClass: BackendInterceptor,
multi: true
}

import {CanActivate,Router, ActivatedRouteSnapshot} from "@angular/router"
import {Injectable} from "@angular/core"
import {AuthService} from './auth.service'

@Injectable()

export class StudentRouteActivator implements CanActivate{
  constructor (
     private router:Router,
     private authservice: AuthService,

     ){

  }

canActivate(route: ActivatedRouteSnapshot){

  const currentUser = this.authservice.currentUserValue
  if(currentUser){
    return true
  }

  else{
    this.router.navigate(['/admin/login'])
  }

}
}

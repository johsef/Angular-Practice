import {CanActivate,Router, ActivatedRouteSnapshot} from "@angular/router"
import {Injectable} from "@angular/core"
import {StudentService} from "./student.service"
import {AuthService} from './auth.service'
import{StudentListComponent} from '../Home '

@Injectable()

export class StudentRouteActivator implements CanActivate{
  constructor (
    private studentService: StudentService,
     private router:Router,
     private authservice: AuthService,

     ){

  }

canActivate(route: ActivatedRouteSnapshot){
  // const studentExists = !!this.studentService.getStudent(+route.params['id'])

  // if(!studentExists)
  //   this.router.navigate(['/404'])
  // return studentExists

   //if (this.isLoggedIn()){

  // }
  const currentUser = this.authservice.currentUserValue
  if(currentUser){
    return true
  }

  else{
    this.router.navigate(['/admin/login'])
  }

  // else if(!currentUser){
  //   this.router.navigate(['/404'])

  // }
// else{
//   this.router.navigate(['/404'])
//   return false
// }

}
}

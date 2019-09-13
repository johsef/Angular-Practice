import {CanActivate,Router, ActivatedRouteSnapshot} from "@angular/router"
import {Injectable} from "@angular/core"
import {StudentService} from "../Shared/student.service"

@Injectable()

export class StudentRouteActivator implements CanActivate{
  constructor (private studentService: StudentService, private router:Router){

  }

canActivate(route: ActivatedRouteSnapshot){
  const studentExists = !!this.studentService.getStudent(+route.params['id'])

  if(!studentExists)
    this.router.navigate(['/404'])
  return studentExists


}
}

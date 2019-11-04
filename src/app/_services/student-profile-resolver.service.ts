import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import {StudentService} from './student.service'
 import {map} from 'rxjs/operators'
@Injectable()

export class StudentProfileResolver implements Resolve<any>{
  constructor (private studentService: StudentService){

  }

  // resolve(){
  //   return this.studentService.local.getAll()
  //   .pipe(map(students => students))
  // }
  resolve(){
    return this.studentService.server.getStudents()
    .pipe(map(students => students))
  }
}

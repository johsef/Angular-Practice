import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import {StudentService} from './Shared/student.service'
 import {map} from 'rxjs/operators'
@Injectable()

export class StudentProfileResolver implements Resolve<any>{
  constructor (private studentService: StudentService){

  }

  resolve(){
    return this.studentService.getStudents().pipe(map(students => students))
  }
}

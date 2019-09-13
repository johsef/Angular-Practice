import {Component} from '@angular/core'
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../Shared/student.service'
import {IStudent} from '../Shared/index'



@Component({
  selector:'student-detail',
templateUrl: './student-details.component.html',
styles : [`
  .container{padding-left: 20px;
             padding-right: 20px;}
`]
})

export class StudentDetailsComponent{
  student: IStudent
  constructor(private studentService: StudentService,
    private route: ActivatedRoute){

  }

  ngOnInit() {
    this.student = this.studentService.getStudent(+this.route.snapshot.params['id'])
  }
}


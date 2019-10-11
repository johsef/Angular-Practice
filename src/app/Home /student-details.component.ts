import {Component} from '@angular/core'
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../_services/student.service'
import {IStudent} from '../_models'



@Component({
  selector:'student-detail',
templateUrl: './student-details.component.html',
styles : [`
  .container{padding-left: 20px;
             padding-right: 20px;}
`]
})

export class StudentDetailsComponent{
  student
  constructor(private studentService: StudentService,
    private route: ActivatedRoute){

  }

  ngOnInit() {
    this.student = this.studentService.getStudent(+this.route.snapshot.params['id'])
  }
}


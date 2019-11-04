import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {StudentService} from '../_services/student.service'

@Component({
  templateUrl:'./add-student.html',
  styles: [`
  em{float:right;
      color: #E05C65;
    padding-left: 10px;}
    .error input{background-color: #E3C3C5;}
    .error :: -webkit-input-placeholder {color: #999}
    .error :: -moz-placeholer{color: #999;}
    .error :-moz-placeholder {color: #999}
    .error : ms-input-placeholder {color:#999}
    `]
})


export class AddStudentComponent{
  newStudent
  constructor(private router: Router,
     private studentService: StudentService){}
ngOnInit(){
}


addStudent(form){
  // this.studentService.local.addStudent(form)
  this.studentService.server.addStudent(form)
    this.router.navigate(['/dashboard'])
  }

  cancel(){
    window.confirm('Are you sure you want to cancel?')
    this.router.navigate(['/dashboard'])
  }

}

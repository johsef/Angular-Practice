import {Component, OnInit} from '@angular/core'
import {StudentService} from '../Shared/student.service'
import {ActivatedRoute} from '@angular/router'
import {IStudent} from '../Shared/index'
declare let toastr
@Component({
  selector: 'student',
  template:`
  <div>
  <h1>Registered Student</h1>
  <hr>
  <div class='row'>
    <div *ngFor='let student of students' class='col-md-5' >
  <student-thumbnail (click)="handleThumbnailClick(student.name)" [student]='student'></student-thumbnail>
  </div>
  </div>
</div>
`
})

export class StudentProfileComponent implements OnInit{

  students:IStudent[]
constructor(private studentService: StudentService, private route: ActivatedRoute){
}

ngOnInit(): void {
this.students = this.route.snapshot.data['students']
}
handleThumbnailClick(studentName){
  toastr.success(studentName)
}

}

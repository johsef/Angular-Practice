import {Component, OnInit} from '@angular/core'
import {StudentService} from '../_services/student.service'
import {ActivatedRoute} from '@angular/router'
import {IStudent} from '../_models'
import {Router} from '@angular/router'
import {AlertService, AuthService} from '../_services'
declare let toastr

@Component({
  selector: 'student',
  template:`
  <div>
  <h1>Registered Student</h1>
  <hr>
  <div class='row'>
    <div *ngFor='let std of students' class='col-md-5' >
  <student-list [std]='std'></student-list>
  </div>
  </div>
</div>
`
})


export class HomeComponent implements OnInit{

  students:IStudent[]
constructor(private studentService: StudentService,
  private auth:AuthService,
  private route: ActivatedRoute,
private router: Router,
private alertService : AlertService){
}
customer

// ngOnInit(): void {
//   setTimeout(() =>{
//     this.alertService.clear()
//   }, 1500)


ngOnInit(): void {
this.students = this.route.snapshot.data['students']
}


}

// }

import {Component, OnInit} from '@angular/core'
import {StudentService} from '../_services/student.service'
import {ActivatedRoute} from '@angular/router'
import {IStudent} from '../_models'
import {Router} from '@angular/router'
import {AlertService} from '../_services/alert.services'
  import {AuthService} from '../_services/auth.service'
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
constructor(private route: ActivatedRoute){}
customer


ngOnInit(): void {
this.students = this.route.snapshot.data['students']
}


}

// }

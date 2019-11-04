import {Component, OnInit, Input} from '@angular/core'
import {StudentService} from '../_services/student.service'
import {ActivatedRoute} from '@angular/router'
import {IStudent} from '../_models'
import {Router} from '@angular/router'
import {AlertService} from '../_services/alert.services'
import {TooltipModule} from 'ngx-tooltip'

@Component({
  selector: 'student',
  templateUrl:'./dashboard.component.html',
  styles: [`
  .thumbnail {min-height: 300px}
  .well div{
    color:#bbb;
  }
  `]
})


export class DashboardComponent implements OnInit{
  id:any
  @Input() stud: IStudent[]
  students: IStudent
constructor(private studentService: StudentService,
  private route: ActivatedRoute,
private router: Router,
private alertService : AlertService){
  }


ngOnInit(): void {
  setTimeout(() =>{
    this.alertService.clear()
  }, 1500)

this.students = this.route.snapshot.data['students']

}

editStudent(id: number){
  this.router.navigate(['edit', id])

}
delStudent(id){
  if(confirm('Are you sure you want to delete Student Record?')){
  //this.studentService.deleteStudent(id).subscribe()
  // this.studentService.local.deleteStudent(id)
  this.studentService.server.deleteStudent(id)

  this.router.navigate(['dashboard'])

  }
}
}

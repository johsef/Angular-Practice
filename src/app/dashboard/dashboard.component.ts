import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core'
import {StudentService} from '../_services/student.service'
import {ActivatedRoute} from '@angular/router'
import {IStudent} from '../_models'
import {Router} from '@angular/router'
import {AlertService, AuthService} from '../_services'
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
  @Input() stud : IStudent
  @Output() studId = new EventEmitter<number>()


  // id:any
// isDirty: boolean = true
  students:IStudent[]
constructor(private studentService: StudentService,
  private route: ActivatedRoute,
private router: Router,
private alertService : AlertService,
private authService : AuthService){
  }
  //  getf(){return this.stud.id}


ngOnInit(): void {
  setTimeout(() =>{
    this.alertService.clear()
  }, 1500)

this.students = this.route.snapshot.data['students']

// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
//   })
// }


}

editStudent(id: number){
  // this.studentService.getId(id)
  this.router.navigate(['edit', id])
  // this.studId.emit(id)
  // console.log(id)
  // this.studentService.getId(this.stud.id)
  // this.studentService.

}
delStudent(id){
  // this.isDirty = false
  if(confirm('Are you sure you want to delete Student Record?')){
  this.studentService.deleteStudent(id)
  }
  else{
    this.router.navigate(['dashboard'])
  }
  // this.router.navigate(['dashboard'])
}

}

//  export function checkDirtyState(component: DashboardComponent){
//     if (component.isDirty)
//       return window.confirm('Are you sure you want to delete Student Record?')
//    return true
//   }

// export function getId(component: DashboardComponent){
//   return component.stud.id
// }

import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import {AuthService} from '../_services/auth.service'
import {StudentService} from '../_services/student.service'
import {Router, ActivatedRoute} from '@angular/router'
import { IStudent } from '../_models'

@Component({
  templateUrl:'./edit.component.html',
  styles: [`
  em {float:right;
    color: #E05C65;
    padding-left: 10px;
  }`]
})


export class EditComponent{
constructor(private authService: AuthService,
   private router: Router,
   private _route: ActivatedRoute,
   private studentService: StudentService){
   }
  //  student: IStudent
student = {
name: ' ',
  age: ' ',
  phonenumber: ' ',
  e_mail:' ',
  level: ' ',
  gender: ' ',
  Degree_Programme: ' ',
  location: {
    address:'',
    town: ' ',
    state: ' '
  },
  website: ' '
}
loading: boolean = true

ngOnInit(){
  var id = this._route.snapshot.paramMap.get('id')
  this.studentService.server.getStudent(id).subscribe(data =>{
    // console.log(data)
    this.student = data
    this.loading = false
  // })
  // this.studentService.local._id = id

  // this._route.paramMap.subscribe(paraMap =>{
  //   const id = +paraMap.get('id')
  //   // this.studentService.local._id = id
  //   this.getStudent(id)
  // })

  })
}
edit(values){
  var id = +this._route.snapshot.paramMap.get('id')
  if (window.confirm('Are you sure you want to update student record?')){
    this.studentService.server.updateStudent(id, values)
  .subscribe(res => {
    this.router.navigate(['/dashboard'])
    console.log('Updated Values'+res)
  })  }
  // this.studentService.local.updateStudent(values)



}

// private getStudent(id: number){
//  this.student = this.studentService.local.editStudent(id)

// }
cancel(){
  this.router.navigate(['/dashboard'])

}

}

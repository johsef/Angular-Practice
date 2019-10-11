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
   private studentService: StudentService){}
// isDirty:boolean = true
student:IStudent


ngOnInit(){
  this._route.paramMap.subscribe(paraMap => {
    const id= +paraMap.get('id')
    this.studentService.studentId = id
    this.getStudent(id)

  })
// this.student={
//   name: this.std.student.name,
//   age: this.std.student.age,
//   phonenumber: this.std.student.phonenumber,
//   e_mail:this.std.student.e_mail,
//   level: this.std.student.level,
//   gender: this.std.student.gender,
//   Degree_Programme: this.std.student.Degree_Programme,
//   location: {
//     address:this.std.student.location.address,
//     town: this.std.student.location.town,
//     state: this.std.student.location.state
//   },
//   website: this.std.student.website
// }
// }

// edit(formValues){
//  this.studentService.updateStudent(formValues)
//  this.isDirty = false
//  this.router.navigate(['/app'])
// }
// cancel(){
//  this.router.navigate(['/app'])
// }


}

private getStudent(id: number){
  this.student = this.studentService.getStudent(id)
  // this.studentService.studentId = id
}

edit(values){
  this.studentService.updateStudent(values)

  // const id = +ParaMap.get('id')
  // this._route.paramMap.
  // this._route.paramMap.subscribe(paraMap => {
  //   const id= +paraMap.get('id')
  //   this.studentService.studentId = id
  // })
  // this.router.navigate(['/dashboard'])

}

cancel(){
  this.router.navigate(['/dashboard'])

}

}

import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {StudentService} from '../_services'


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
  // isDirty:boolean = true
   newStudent


  constructor(private router: Router,
     private studentService: StudentService){}
ngOnInit(){
  // this.student={
  //   name: "James",
  //   age: "10",
  //   phonenumber: "12345",
  //   e_mail:"j@ymail.com",
  //   level: "200",
  //   gender: "Male",
  //   Degree_Programme: "Msc.",
  //   location: {
  //     address:"2",
  //     town: "ikate",
  //     state: "lagos"
  //   },
  //   website: "3indigen.com"
  // }
}

  addStudent(formValues){
    this.studentService.addStudent(formValues)
    // this.isDirty = false
    this.router.navigate(['/dashboard'])
  }
  cancel(){
    window.confirm('Are you sure you want to cancel?')
    this.router.navigate(['/dashboard'])
  }
}

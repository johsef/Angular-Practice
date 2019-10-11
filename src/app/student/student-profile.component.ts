// import {Component, OnInit} from '@angular/core'
// import {StudentService} from '../_services/student.service'
// import {ActivatedRoute} from '@angular/router'
// import {IStudent} from '../_models'
// import {Router} from '@angular/router'
// import {AlertService} from '../_services/alert.services'
// declare let toastr
// @Component({
//   selector: 'student',
//   template:`
//   <div>
//   <h1>Registered Student</h1>
//   <hr>
//   <div class='row'>
//     <div *ngFor='let student of students' class='col-md-5' >
//   <student-thumbnail (click)="handleThumbnailClick(student)" [student]='student'></student-thumbnail>
//   </div>
//   </div>
// </div>
// `
// })

// export class StudentProfileComponent implements OnInit{

//   students:IStudent[]
// constructor(private studentService: StudentService,
//   private route: ActivatedRoute,
// private router: Router,
// private alertService : AlertService){
// }

// ngOnInit(): void {
//   setTimeout(() =>{
//     this.alertService.clear()
//   }, 1500)

// this.students = this.route.snapshot.data['students']
// }
// handleThumbnailClick(student){
  // toastr.success(studentName)
  // this.router.navigate(['/user/edit'])

// }

// }

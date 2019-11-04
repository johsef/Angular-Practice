import {Injectable, OnInit} from '@angular/core'
import {Subject, Observable, throwError} from 'rxjs'
import { IStudent } from '../_models/student.model';
 import {STUDENTS} from '../user/UserData'
 import {Router, ActivatedRoute} from '@angular/router'


// localStorage.setItem('students', JSON.stringify(STUDENTS))
@Injectable()


export class localStorageFetch implements OnInit{
  storage:Array<any> = JSON.parse(localStorage.getItem('students'))
  student_model: IStudent
  _id:number

  constructor(private router: Router,
    private _route: ActivatedRoute){}
    ngOnInit(){
      this._route.paramMap.subscribe(paraMap =>{
        const id = +paraMap.get('id')
        this._id = id
      })

    }



//Get all students
  getAll(): Observable<IStudent> {
    let subject = new Subject<any>()
    setTimeout(()=>{
    subject.next(this.storage)
    subject.complete()},
    100)
    return subject

}


//Add Students
  addStudent(data){
    data.id = this.storage.length ? Math.max(...this.storage.map(data => data.id)) +1 : 1
    this.storage.push(data)
    localStorage.setItem('students', JSON.stringify(this.storage))
  }


  //Get Students to edit
  editStudent(_id: number):IStudent {
    return this.storage.find(student => student.id === this._id)
  }


//Function to update Student
 updateStudent(data) {
   for (var i = 0; i < this.storage.length; i++){
if(this.storage[i].id === this._id){
  data.id = this.storage[i].id
  this.storage.splice(1, 1, data)
   }
  }
localStorage.setItem('students', JSON.stringify(this.storage))
this.router.navigate(['dashboard'])
}

//Function to delete students
  deleteStudent(id){
    for (var i = 0; i < this.storage.length; i++){
      if(this.storage[i].id === id){
        this.storage.splice(i,1)

      }
    }
    localStorage.setItem('students', JSON.stringify(this.storage))
}

}




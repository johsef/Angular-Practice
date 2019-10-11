import {Injectable, OnInit} from '@angular/core'
import {Subject, Observable} from 'rxjs'
import { IStudent } from '../_models/student.model';
import{Router, ActivatedRoute} from '@angular/router'

@Injectable()

export class StudentService implements OnInit{
  stdStor: Array<[]>
  storage: Array<any>
  std: IStudent
   studentId: number
  id: any
  constructor(private router: Router,
    private _route: ActivatedRoute){}

  ngOnInit(){
    this._route.paramMap.subscribe(paraMap => {
      const id= +paraMap.get('id')
      // this.studentService.studentId = id
      this.studentId = id
      // console.log(this.studentId)

    })
  }

  getCurrentId(iid: number){
   return iid
  }

  getStudents():Observable<IStudent>  {
    this.storage = JSON.parse(localStorage.getItem('students'))
    if (this.storage == null){
      localStorage.setItem('students', JSON.stringify(STUDENTS))
    }
    this.storage = JSON.parse(localStorage.getItem('students'))
    let subject = new Subject<any>()
    setTimeout(()=> {
      // this.storage = JSON.parse(localStorage.getItem('students'))
      // if (this.stdStor == null) {
      //  this.storage= STUDENTS
      // }
      subject.next(this.storage)
    subject.complete()},
    100)

  return subject

  }
  getStudent(id: number): IStudent{

  this.stdStor = JSON.parse(localStorage.getItem('students'))
  // if (this.stdStor == null) {
  //  this.storage= STUDENTS
  // }
  // else{
    this.storage = this.stdStor
    console.log(this.studentId)

  // }
  // return this.stdStor.find(std => std.id === id)
  return this.storage.find(std => std.id === id)
}

addStudent(student){
  this.storage = JSON.parse(localStorage.getItem('students'))
  // student.id = STUDENTS.length ? Math.max(...STUDENTS.map( i => i.id)) + 1: 1
  student.id = this.storage.length ? Math.max(...this.storage.map(i => i.id)) + 1: 1
  this.storage.push(student)
 localStorage.setItem('students', JSON.stringify(this.storage))
}

deleteStudent(id: number){
  // this.storage.find((std, i)=>{
  //   if(std.id == id){

  //   }

  // })

  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i].id === id){
      this.storage.splice(i, 1)
    }
  }
  localStorage.setItem('students', JSON.stringify(this.storage))


}


updateStudent(student){
      this.storage = JSON.parse(localStorage.getItem('students'))
      // if (this.storage == null) {
      // this.storage= STUDENTS
      // }
  //    this.storage.map((item, i)=>{
  //    if(item.id == student.id){
  //     // this.storage[i] = student
  //   // this.storage.splice(this.storage[i], 1, student)
  //   // STUDENTS.push(student)
  //   this.storage
  //   localStorage.setItem('students', JSON.stringify(this.storage[i]))
  //   }
  // })
  // return student
  // this.std.id = this.storage.length ? Math.max(...this.storage.map(i => i.id)) + 1: 1

  // this.studentId = this.getId(this.id)
  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i].id === this.studentId ){
      student.id = this.storage[i].id
      this.storage.splice(i, 1, student)
      // this.storage.unshift({id: student.id})
    }
  }

  // this.getCurrentId(this.id)
  // console.log(this.getCurrentId(this.id))

 localStorage.setItem('students', JSON.stringify(this.storage))
 this.router.navigate(['dashboard'])

}


}

const STUDENTS = [
{
id: 1,
name: 'James Rodriguez',
age: 31,
phonenumber: '08098445749',
level: 300,
Degree_Programme:'Bsc.',
e_mail: 'joejoeoyemi@gmail.com',
gender: 'Male',
location:{
  address: '3, Art Gallery',
  town: 'Lekki',
  state: 'Lagos'
},
website: 'https://www.w3schools.com'


},{ id: 2,
name: 'Johnson Fatunbi',
age: 12,
level: 300,
phonenumber: '0908734539',
e_mail: 'yahoo_yahoo@gmail.com',
Degree_Programme:'Msc.',
gender: 'Female',
location:{
  address: '6, Broad Street',
  town: 'Lekki',
  state: 'Lagos'
}


},
{ id: 3,
name: 'Joe Andriano',
age: 10,
phonenumber: '09088374607',
level: 300,
e_mail: 'rInsurance@gmail.com',
gender: 'Male',
website: 'https://www.w3schools.com',
location:{
  address: '3, telephone Gallery',
  town: 'Lekki',
  state: 'Lagos'
}


},
{ id: 4,
name: 'James Rodriguez',
age: 31,
phonenumber: '08098445749',
level: 300,
e_mail: 'joejoeoyemi@gmail.com',
gender: 'Male',
location:{
  address: '3, Art Gallery',
  town: 'Lekki',
  state: 'Lagos'
}


},
{ id: 5,
name: 'Charles Rodriguez',
age: 31,
phonenumber: '08098445749',
level: 300,
e_mail: 'joejoeoyemi@gmail.com',
gender: 'Male',
Degree_Programme:'Phd.',
location:{
  address: '3, Art Gallery',
  town: 'Lekki',
  state: 'Lagos'
}


}
]

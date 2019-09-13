import {Injectable} from '@angular/core'
import {Subject, Observable} from 'rxjs'
import { IStudent } from './student.model';

@Injectable()

export class StudentService{

  getStudents():Observable<IStudent[]> {
    let subject = new Subject<IStudent[]>()
    setTimeout(()=> {subject.next(STUDENTS);
    subject.complete()},100)
  return subject

  }
  getStudent(id: number): IStudent {
  return STUDENTS.find(std => std.id === id)

}
}

const STUDENTS: IStudent[] = [
{
id: 1,
name: 'James Rodriguez',
age: 31,
phonenumber: '08098445749',
Degree_Programme:'Bsc.',
e_mail: 'joejoeoyemi@gmail.com',
gender: 'male',
location:{
  address: '3, Art Gallery',
  town: 'Lekki',
  state: 'Lagos'
},
website: 'https://www.w3schools.com'


},{ id: 2,
name: 'Johnson Fatunbi',
age: 12,
phonenumber: '0908734539',
e_mail: 'yahoo_yahoo@gmail.com',
Degree_Programme:'Msc.',
gender: 'female',
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
e_mail: 'rInsurance@gmail.com',
gender: 'male',
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
e_mail: 'joejoeoyemi@gmail.com',
gender: 'male',
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
e_mail: 'joejoeoyemi@gmail.com',
gender: 'male',
Degree_Programme:'Phd.',
location:{
  address: '3, Art Gallery',
  town: 'Lekki',
  state: 'Lagos'
}


}
]

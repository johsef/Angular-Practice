import {Injectable, OnInit} from '@angular/core'
import {Observable, throwError} from 'rxjs'
import { IStudent } from '../_models/student.model';
import {catchError, map} from 'rxjs/operators'
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
 import { api} from   '../../environments/connectionString'

const headers = new HttpHeaders().set('Content-Type', 'application/json')
@Injectable( {providedIn: 'root'})

export class serverStorageFetch implements OnInit{

  std: IStudent
  id: any
  service:any
  constructor(private http: HttpClient){}

  ngOnInit(){}
  _api = api
  headers = headers
  addStudent(data:IStudent) {
    let API_URL = `${this._api}/add`
    return this.http.post(API_URL, data)
    .pipe(
      catchError(this.errorMgmt)
    )
  }


//Get All Students
getStudents() {return this.http.get(`${this._api}`)}

//Get Particular student
getStudent(id): Observable<any> {
let API_URL =  `${this._api}/edit/${id}`
return this.http.get(API_URL, {headers: this.headers})
.pipe(
  map((res: Response) => {
    return res || {}
  }),
  catchError(this.errorMgmt)
)
}

//Delete Particular student
deleteStudent(id): Observable<any>{
  let API_URL = `${this._api}/delete/${id}`
  return this.http.delete(API_URL)
  .pipe(
    catchError(this.errorMgmt)
  )

}


//Fucntion to update student
updateStudent(id, data): Observable<any> {
let API_URL =  `${this._api}/update/${id}`
return this.http.put(API_URL, data, { headers: this.headers })
.pipe(
  catchError(this.errorMgmt)
)}

//Function to manage errors
errorMgmt(error: HttpErrorResponse) {
  let errorMessage = ''
  if(error.error instanceof ErrorEvent){
    //Get client-side error
    errorMessage = error.error.message
  }
  else{
    //Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage : ${error.message}`
  }
  return throwError(errorMessage)
}

}


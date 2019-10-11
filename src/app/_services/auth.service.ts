import {Injectable, OnInit} from '@angular/core'
import {IUser} from '../_models/user.model'
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
import {BehaviorSubject, Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {AlertService} from './index'

@Injectable({providedIn: 'root'})

export class AuthService implements OnInit{
  private CurrentUserSubject: BehaviorSubject<any>
  public currentUser:Observable<any>
  message : string

  constructor(private http: HttpClient,
    private alertService: AlertService,
    private route : Router){
    this.CurrentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')))
    this.currentUser = this.CurrentUserSubject.asObservable()
  }

  ngOnInit(){
    if (this.message == ''){
      this.message = JSON.parse(sessionStorage.getItem('currentUser')).username
    }
  }



public get currentUserValue(){return this.CurrentUserSubject.value}

    login(username: string, password:string){
      return this.http.post<any>(`http://localhost:4200/students/authenticate`,
      {username, password})
      .pipe(map(user => {
        //Successful login if there's a jwt token in the response
        if(user && user.token){
          //..Stores user details in session storage and keep logged in user between browser refresh
          sessionStorage.setItem('currentUser', JSON.stringify(user))

          this.CurrentUserSubject.next(user)
          this.message = JSON.parse(sessionStorage.getItem('currentUser')).username
          // console.log(this.message)

        }
        return user
      }))
    }


    getCustomers(): Observable<any>{
      // console.log(this.http.get(`https://jsonplaceholder.typicode.com/users`))
      return  this.http.get(`https://jsonplaceholder.typicode.com/users`)

    }

      logout(){
        //remove user from sessionstorage to log user out

        this.alertService.logout('Logged Out successfully', true)
        this.route.navigate(['/home'])
        sessionStorage.removeItem('currentUser')
        this.CurrentUserSubject.next(null)
        setTimeout(() =>{
          this.alertService.clear()
        }, 2000)
      }

  // currentUser: IUser
  // currentUser
  // user
  // UserName
  // password
/*   loginUser(UserName: string, password: string){
    this.currentUser ={
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      username: UserName,
      password: password
    }
    this.user= {
      username: UserName,
      password: password
    }


  } */






/*   isAuthenticated(){
    return !!this.currentUser
    return !!this.user
    return !!this.loginUser(this.UserName, this.password)
  } */
  // logout(): void{
  //   localStorage.removeItem('token')
  // }

  // updateCurrentUser(firstName: string, lastName: string ){
  //   this.currentUser.firstName = firstName
  //   this.currentUser.lastName = lastName
  // }

}

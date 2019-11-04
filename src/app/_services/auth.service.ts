import {Injectable, OnInit} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
import {BehaviorSubject, Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {AlertService} from './alert.services'

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

        }
        return user
      }))
    }


    getCustomers(): Observable<any>{
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
}

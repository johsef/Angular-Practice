import {Component} from '@angular/core'
import {AuthService} from './auth.service'
import {Router} from '@angular/router'
@Component({
  templateUrl:'./login.component.html',
  styles: [`
  em {float:right;
    color: #E05C65;
    padding-left: 10px;
  }`]
})
export class LoginComponent{
  UserName:any
  password:any
  mouseoverLogin

  constructor(private authService: AuthService, private router: Router){}
  login(formValues){
    this.authService.loginUser(formValues.UserName, formValues.password)
    this.router.navigate(['app'])
  }
  cancel(){
    this.router.navigate(['app'])
  }
}

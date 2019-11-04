import {Component, OnInit, Input} from '@angular/core'
import {AuthService} from '../_services/auth.service'
import {Router, ActivatedRoute} from '@angular/router'
import {AlertService} from '../_services/alert.services'
import { FormGroup, FormBuilder,Validators } from '@angular/forms'
import {first} from 'rxjs/operators'

@Component({
  templateUrl:'./login.component.html',
  styles: [`
  em {float:right;
    color: #E05C65;
    padding-left: 10px;
  }`]
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup
  loading=false
  submitted = false
  returnUrl: string
  mouseoverLogin
  message: string


  constructor(
    private alertService: AlertService,
    private authService: AuthService,
   private router: Router,
   private formBuider: FormBuilder
   ){}

  ngOnInit(){
    this.loginForm = this.formBuider.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() {return this.loginForm.controls}

  onSubmit(){
    this.submitted  = true

    this.alertService.clear()

    if(this.loginForm.invalid){return}


    this.authService.login(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      data =>{
        this.alertService.success('Login Successful', true)
          location.href="dashboard"
      },
      error =>{
          this.alertService.error('Invalid username or password')

      }
    )



  }
  cancel(){
    this.router.navigate(['home'])
  }
}

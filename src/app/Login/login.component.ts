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
  // UserName:string
  // password:string

  loginForm: FormGroup
  loading=false
  submitted = false
  returnUrl: string
  mouseoverLogin
  message: string

  // messa = this.f.username.value

  constructor(
    private alertService: AlertService,
    private authService: AuthService,
   private router: Router,
   private formBuider: FormBuilder,
   private route: ActivatedRoute
   ){}

  ngOnInit(){
    this.loginForm = this.formBuider.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
      // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }

  get f() {return this.loginForm.controls}

  onSubmit(){
    this.submitted  = true

    //reset alerts on submit
    this.alertService.clear()

    if(this.loginForm.invalid){return}

    // this.loading = true

    this.authService.login(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      data =>{
        this.alertService.success('Login Successful', true)

        // this.router.navigate(['dashboard'])
        // setTimeout(() =>{
          location.href="dashboard"
        // }, 3000)

      },
      error =>{
          // this.message = "Invalid Username or Password"

          // setTimeout(() =>{
          //   this.message=" "
          // },2000)
          this.alertService.error('Invalid username or password')
          // this.loading= false
      }
    )



  }


  // login(formValues){
    //  this.authService.loginUser(formValues.UserName, formValues.password)
// if (formValues.UserName == this.model.username && formValues.password == this.model.password){
//   localStorage.setItem('token', 'admin')
//   this.router.navigate(['app'])
// }
// else{
//   this.message = "Invalid Username or Password!"
//   this.router.navigate(['/user/login'])
// }




    // this.router.navigate(['app'])
    // this.authService.logout()
  // }
  cancel(){
    this.router.navigate(['home'])
  }
}

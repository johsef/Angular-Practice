import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import {AuthService} from '../_services/auth.service'
import {Router} from '@angular/router'


@Component({
  templateUrl: './profile.component.html',
  styles: [`
  em{float:right;
      color: #E05C65;
    padding-left: 10px;}
    .error input{background-color: #E3C3C5;}
    .error :: -webkit-input-placeholder {color: #999}
    .error :: -moz-placeholer{color: #999;}
    .error :-moz-placeholder {color: #999}
    .error : ms-input-placeholder {color:#999}
    `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup
  private firstName: FormControl
  private lastName: FormControl

  constructor(private router:Router, private authService: AuthService){}

  ngOnInit(){
  }
  cancel(){
    this.router.navigate(['app'])
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched }



  validateLastName(){
    return this.lastName.valid || this.firstName.untouched }


    saveProfile(formValues){
  //     if(this.profileForm.valid){
  //       this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
  //       this.router.navigate(['app'])
  // }
    }

  }




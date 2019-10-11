import { NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {userRoutes} from './user.routes'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ProfileComponent} from '../Home /profile.component'
import { LoginComponent } from '../Login/login.component'
// import { EditComponent } from '../Edit-student/edit.component'

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
     FormsModule
  ],
  declarations: [
    ProfileComponent, LoginComponent,
    //  EditComponent
  ],
  providers:[]
})

export class UserModule{}


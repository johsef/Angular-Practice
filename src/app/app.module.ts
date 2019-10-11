import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


// User Created components and services
import {TooltipModule} from 'ngx-tooltip'
import {AppComponent} from './app.component'
import { NavBarComponent } from './navbar';
import {appRoutes} from '../routes';
import {Error404Component, Error401Component} from './errors';
// import { StudentProfileComponent,
//   StudentThumbnailComponent} from './student';
  import { StudentDetailsComponent} from './Home '
import {HomeComponent, StudentListComponent} from './Home '
  import {AddStudentComponent} from './Add-students'
  import {StudentService,
  StudentRouteActivator,
  StudentProfileResolver,AuthService,AlertService
} from './_services'
import {AlertComponent} from './Alert'
import {JwtInterceptor,
  ErrorInterceptor,
   backendProvider,
    BackendInterceptor} from './_helpers'
import { DashboardComponent } from './dashboard';
// import {DashboardComponent} from './edit-student/dashboard/dashboard.component'
import {EditComponent} from './Edit-student';
import { CustomerComponent } from './customer/customer.component';
// import {checkDirtyState} from './dashboard'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
     ReactiveFormsModule,
     HttpClientModule,TooltipModule

  ],
  declarations: [
  AppComponent,
    // StudentProfileComponent,
    // StudentThumbnailComponent,
    NavBarComponent, StudentDetailsComponent,
    AddStudentComponent, Error404Component,
    Error401Component,
    AlertComponent, HomeComponent,StudentListComponent,
    DashboardComponent,
    // DashboardComponent,
    EditComponent,
    CustomerComponent,

  ],

  providers:[StudentService,AlertService,
    // StudentThumbnailComponent,
    StudentRouteActivator,
    StudentProfileResolver,
  // {provide: 'canDeactivateAddStudent',useValue: checkDirtyState},
  {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BackendInterceptor,
    multi: true
    },
  backendProvider,


  AuthService

  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
  // export function checkDirtyState(component: AddStudentComponent){
  //   if (component.isDirty)
  //     return window.confirm('You haven\'t saved this form, Are you sure you want to leave?')
  //  return true
  // }


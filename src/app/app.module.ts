import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { RegisterAppComponent } from './register-app.component';
import { NavBarComponent } from './navbar/navbar.component';
import {appRoutes} from '../routes';
import {Error404Component} from './errors/404.component';
import { StudentProfileComponent,
  StudentThumbnailComponent,
   StudentDetailsComponent,
  AddStudentComponent,
  StudentService,
  StudentRouteActivator,
  StudentProfileResolver
} from '../index'
import { AuthService } from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    RegisterAppComponent,
    StudentProfileComponent,
    StudentThumbnailComponent,
    NavBarComponent, StudentDetailsComponent,
    AddStudentComponent, Error404Component,

  ],

  providers:[StudentService,
    StudentRouteActivator,
    StudentProfileResolver,
  {provide: 'canDeactivateAddStudent',
    useValue: checkDirtyState
},
  AuthService

  ],

  bootstrap: [RegisterAppComponent]
})
export class AppModule {}
  export function checkDirtyState(component: AddStudentComponent){
    if (component.isDirty)
      return window.confirm('You haven\'t saved this form, Are you sure you want to leave?')
   return true
  }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

//NG-Zorro_Module}
import { NgZorroAntdModule, NZ_I18N , en_US} from 'ng-zorro-antd'

// User Created components and services
import {TooltipModule} from 'ngx-tooltip'
import {AppComponent} from './app.component'
import { NavBarComponent } from './navbar';
import {appRoutes} from '../routes';
import {Error404Component, Error401Component} from './errors';
  import { StudentDetailsComponent} from './Home '
import {HomeComponent, StudentListComponent} from './Home '
  import {AddStudentComponent} from './Add-students'
  import {StudentService} from './_services/student.service'
  import {StudentRouteActivator} from './_services/student-route-activator.service'
  import {StudentProfileResolver} from './_services/student-profile-resolver.service'
  import {AuthService} from './_services/auth.service'
  import {AlertService} from './_services/alert.services'
import {AlertComponent} from './Alert'
import {backendProvider, BackendInterceptor} from './backend'
import { DashboardComponent } from './dashboard';
import {EditComponent} from './Edit-student';
import { CustomerComponent } from './customer/customer.component';
import {serverStorageFetch}from './_services/serverStorage'
import {localStorageFetch} from './_services/localStorage'


//config angulae il8n

import {registerLocaleData} from '@angular/common'
import en from '@angular/common/locales/en'
registerLocaleData(en)
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
     ReactiveFormsModule,
     HttpClientModule,TooltipModule,
     NgZorroAntdModule

  ],
  declarations: [
  AppComponent,
    NavBarComponent, StudentDetailsComponent,
    AddStudentComponent, Error404Component,
    Error401Component,
    AlertComponent, HomeComponent,StudentListComponent,
    DashboardComponent,
    EditComponent,
    CustomerComponent,

  ],

  providers:[StudentService,AlertService,
    StudentRouteActivator,
    StudentProfileResolver,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BackendInterceptor,
    multi: true
    },
    localStorageFetch,
    serverStorageFetch,
    {provide: NZ_I18N, useValue: en_US },
  backendProvider,
  AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


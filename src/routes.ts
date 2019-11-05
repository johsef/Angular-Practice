import {Routes} from '@angular/router'
import {StudentDetailsComponent } from './app/Home '
import {HomeComponent} from './app/Home '
import { AddStudentComponent} from './app/Add-students'
import {StudentRouteActivator} from './app/_services/student-route-activator.service'
import {StudentProfileResolver} from './app/_services/student-profile-resolver.service'
import { Error404Component, Error401Component } from './app/errors';
import { DashboardComponent } from './app/dashboard'
import {EditComponent} from './app/Edit-student'
import { CustomerComponent } from './app/customer/customer.component'



export const appRoutes:Routes = [
  {path: 'new', component: AddStudentComponent, canActivate: [StudentRouteActivator]
},
{path: 'home', component: HomeComponent,
  resolve: {students:StudentProfileResolver}},
{path: '404', component: Error404Component},
{path: '401', component: Error401Component},
{path: 'home/:id', component: StudentDetailsComponent,
 canActivate: [StudentRouteActivator] },
 {path: 'edit/:id', component: EditComponent,
 canActivate: [StudentRouteActivator] },
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'admin', loadChildren: 'src/app/user/user.module#UserModule'},
{path : 'dashboard', component: DashboardComponent,
resolve: {students:StudentProfileResolver},canActivate: [StudentRouteActivator]
},
{path: 'customer', component:CustomerComponent}

]

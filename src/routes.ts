import {Routes} from '@angular/router'
import {StudentDetailsComponent,
  StudentProfileComponent,
  AddStudentComponent,
  StudentRouteActivator,
  StudentProfileResolver} from './index'
import { Error404Component } from './app/errors/404.component';


export const appRoutes:Routes = [
  {path: 'app/new', component: AddStudentComponent,
canDeactivate: ['canDeactivateAddStudent']},
{path: 'app', component: StudentProfileComponent, resolve: {students:StudentProfileResolver}},
{path: '404', component: Error404Component},
{path: 'app/:id', component: StudentDetailsComponent, canActivate: [StudentRouteActivator] },
{path: '', redirectTo: 'app', pathMatch: 'full'},
{path: 'user', loadChildren: './app/user/user.module#UserModule'}

]

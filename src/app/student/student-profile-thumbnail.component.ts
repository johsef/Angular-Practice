import {Component, Input} from '@angular/core'
import {IStudent} from '../Shared/index'

@Component({
  selector: 'student-thumbnail',
  template:
  `<div [routerLink]="['/app', student.id]" class ='well hoverwell thumbnail'>
  <h3>{{student.name}}</h3>
  <div >Age: {{student.age}}</div>
  <div>Phone Number: {{student.phonenumber}}</div>
  <div>E-mail: {{student.e_mail}}</div>
  <div>Gender: {{student.gender}}</div>
  <div *ngIf='student.Degree_Programme'>Degree Programme: {{student.Degree_Programme}}</div>
  <div>Address:{{student.location.address}},
  {{student.location.town}} {{student.location.state}}</div>
  <div [hidden]='!student.website'>Website: {{student.website}}</div>

  </div>
  `,
  styles: [`
  .thumbnail {min-height: 270px}
  .well div{
    color:#bbb;
  }
  `]

})

export class StudentThumbnailComponent{
@Input() student:IStudent


}

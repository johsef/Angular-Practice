import {Component, Input} from '@angular/core'
import {IStudent} from '../_models'

@Component({
  selector: 'student-list',
  template:
  `<div class ='well hoverwell thumbnail'>
  <h3>{{std.name}}</h3>
  <div >Age: {{std.age}}</div>
  <div>Phone Number: {{std.phonenumber}}</div>
  <div>E-mail: {{std.e_mail}}</div>
  <div>Gender: {{std.gender}}</div>
  <div>Level: {{std.level}}</div>
  <div *ngIf='std.Degree_Programme'>Degree Programme: {{std.Degree_Programme}}</div>
  <div>Address:{{std.location.address}},
  {{std.location.town}} {{std.location.state}}</div>
  <div [hidden]='!std.website'>Website: {{std.website}}</div>

  </div>
  `,
  styles: [`
  .thumbnail {min-height: 270px}
  .well div{
    color:#bbb;
  }
  `]

})

export class StudentListComponent{
 @Input() std: IStudent


}

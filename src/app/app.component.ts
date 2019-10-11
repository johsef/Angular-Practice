import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template:`
  <nav-bar></nav-bar>
   <alert></alert>
  <router-outlet></router-outlet>

  `,
  styles:[`a {cursor : pointer }`]
})

export class AppComponent {
  title = 'Student Registration';
}

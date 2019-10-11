import { Component } from '@angular/core'


@Component({
  template: `
    <h1 class="errorMessage">Unauthorized access</h1>
  `,
  styles: [`
    .errorMessage {
      margin-top:100px;
      font-size: 70px;
      text-align: center;
    }`]
})

export class Error401Component{
  constructor() {

  }

}

import { Component } from '@angular/core'

@Component({
  template: `
    <h1 class="errorMessage">Sorry, Page not found</h1>
  `,
  styles: [`
    .errorMessage {
      margin-top:100px;
      font-size: 70px;
      text-align: center;
    }`]
})
export class Error404Component{
  constructor() {

  }

}

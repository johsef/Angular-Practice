import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  template: `
  <h1>New Student<h1>
  <hr>
  <div class='col-md-6'>
  <h3>[New Student Form]</h3>
  <br/>
  <br/>
  <button type='submit' class='btn btn-primary'>Save</button>
  <button type='button' (click)='cancel()'  class='btn btn-default'>Cancel</button>

  </div>
  `,

})

export class AddStudentComponent{
  isDirty:boolean = true

  constructor(private router: Router){

  }
  cancel(){
    this.router.navigate(['/app'])
  }
}

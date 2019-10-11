import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';

import { AlertService } from '../_services/alert.services';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html'
})


export class AlertComponent implements OnInit, OnDestroy {
private subscription: Subscription
message:any

constructor(private alertService: AlertService){}

ngOnInit(){
  this.subscription = this.alertService.getMessage()
  .subscribe(message =>{
    switch (message && message.type){
      case 'success':
        message.cssClass = 'alert alert-success'
        break;
      case 'error':
        message.cssClass = 'alert alert-danger'
        break;
      case 'logout':
        message.cssClass = 'alert alert-danger'
        break;

      // case 'info':
      //   message.cssClass = 'alert alert-warning'

    }
    this.message = message

  })

}

ngOnDestroy(){
  this.subscription.unsubscribe()
}
}

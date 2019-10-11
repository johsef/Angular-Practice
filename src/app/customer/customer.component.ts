import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private auth: AuthService) { }
  customer
  // custom
  ngOnInit() {

this.getAllCustomers()
  }
  getAllCustomers(){
    this.auth.getCustomers()
    .subscribe(
      (data) => {
        this.customer = data

      },
      (error: any)=> console.log(error)
    )
  }

}

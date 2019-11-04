import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private auth: AuthService) { }
  customer
  loading:boolean = true
  // custom
  ngOnInit() {

this.getAllCustomers()
  }
  getAllCustomers(){
    this.auth.getCustomers()
    .subscribe(
      (data) => {
        this.customer = data
        this.loading = false

      },
      (error: any)=> console.log(error)
    )
  }

}

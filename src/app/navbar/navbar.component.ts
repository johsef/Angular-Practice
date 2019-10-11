import {Component, OnInit, Input} from '@angular/core'
import {AuthService} from '../_services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'nav-bar',
  templateUrl:'./navbar.component.html',
  styles: [
    `.nav.navbar-nav{font-size: 12px;}
    #searchForm {margin-right:100px;}
    li > a.active {color: #f97924;}
    /*@media(max-width: 1200px){

      li > a.active {color: #f97924; }
    }*/

    `
  ]

})


export class NavBarComponent implements OnInit{
  currentUser: any
   message: string
  constructor(public auth:AuthService,
    private router : Router){
    this.auth.currentUser.subscribe(x =>
      this.currentUser = x)

      // if(sessionStorage.getItem('currentUser')){
      //   this.message = JSON.parse(sessionStorage.getItem('currentUser')).username
      //    }

   }


   ngOnInit(){
     if(sessionStorage.getItem('currentUser')){
    this.message = JSON.parse(sessionStorage.getItem('currentUser')).username
     }
    // this.message = this.auth.message
   }
   log(){
     this.auth.logout()
   }


  //  certified(){
  //    switch(){
  //      case 'currentUser':
  //        return
  //    }
  //  }
}

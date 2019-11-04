import {Injectable, OnInit} from '@angular/core'
 import {localStorageFetch} from './localStorage'
 import {serverStorageFetch} from './serverStorage'

@Injectable( {providedIn: 'root'})

export class StudentService implements OnInit{

  constructor(public local: localStorageFetch,
    public server: serverStorageFetch){}

  ngOnInit(){

  }
}

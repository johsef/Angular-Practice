import {Injectable} from '@angular/core'
import {IUser} from './user.model'

@Injectable()

export class AuthService{
  currentUser: IUser
  loginUser(UserName: string, password: string){
    this.currentUser ={
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      UserName: UserName

    }
  }
  isAuthenticated(){
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string ){
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
  }
}

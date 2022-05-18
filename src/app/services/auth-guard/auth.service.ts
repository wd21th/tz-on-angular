import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'

@Injectable()
export class AuthService {

  constructor( public firebaseAuth : AngularFireAuth) { }

  public async isRouteAuthenticated():Promise<boolean>{
      console.log(await this.firebaseAuth.currentUser)
      
      
    
if(await this.firebaseAuth.currentUser) return true
else return false
  


}

}
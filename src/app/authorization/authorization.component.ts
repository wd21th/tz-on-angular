import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  title = 'firebase-angular-auth';
  // isSignedIn = false
  constructor(public firebaseService : FirebaseService){}
  
  
  ngOnInit(){
    /* if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false */
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    // if(this.firebaseService.isLoggedIn)
    // this.isSignedIn = true
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    // if(this.firebaseService.isLoggedIn)
    // this.isSignedIn = true
  }
  async handleLogout(){
    await this.firebaseService.logout()
    // this.isSignedIn = false
  }
}

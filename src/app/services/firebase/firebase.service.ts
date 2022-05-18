import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})



export class FirebaseService {
  // isLoggedIn = false
  constructor(public firebaseAuth : AngularFireAuth,
    private router: Router
    ) { }


  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    /* .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    }) */
    this.router.navigate(['/posts']);
  }
  async signup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
   
  this.signin(email, password)
  this.router.navigate(['/posts']);
   /*  .then(res=>{
      this.isLoggedIn = true
      // localStorage.setItem('user',JSON.stringify(res.user))
    }) */
  }
 async logout(){
 await this.firebaseAuth.signOut()
  console.log("Sn")


  this.router.navigate(['/']);
    // console.log(await this.firebaseAuth.currentUser)
// this.firebaseAuth.
    
    // localStorage.removeItem('user')
  }
}

import { Injectable } from '@angular/core';
import { CanActivate,CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {AngularFireAuth} from '@angular/fire/auth'



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild  {

  constructor(private authService: AuthService, private router: Router,
    public firebaseAuth : AngularFireAuth
    ) { }



  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true;
  }



canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {


  return this.authService.isRouteAuthenticated()
    // return true;
  }



}

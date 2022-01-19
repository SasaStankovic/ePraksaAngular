import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_servisi/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //Od bekenda dobijem podatke da li je korisnik ulogovan ili ne i na osnovu toga napisem biznis logiku
  //implementirati servis auth na osnovu kog cu izvuci podatke o tome da li je korisnik logovan i koja mu je rola

  constructor(private router: Router) {}
  isLogged!:boolean;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let user = localStorage.getItem('user');
      if (user != null)
        this.isLogged = JSON.parse(user);
      if(!this.isLogged){
      this.router.navigateByUrl('/welcome');
      return false;
    }
    return true;
  }
  
}

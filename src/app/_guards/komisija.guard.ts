import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KomisijaGuard implements CanActivate {

  isKomisija!: string;
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // let user = localStorage.getItem('user');
    // if(user!=null){
    //   let tmp = JSON.parse(user).rola;
    //   if(tmp!== "komisija")
    //   {
    //     this.router.navigateByUrl('/welcome');
    //     return false;
    //   }
    // }
    return true;
  }

}

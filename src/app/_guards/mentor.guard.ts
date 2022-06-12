import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_servisi/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MentorGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!(this.auth.isMentor())) {
      this.router.navigateByUrl(this.auth.getRole());
      return false;
    }
    else
      return true;
  }
}

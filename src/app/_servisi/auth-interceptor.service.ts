import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token')
    console.log("INTERCEPTOR", token);

    if (token) {
      const tmp = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token),
      });
      console.log(tmp)
      return next.handle(tmp);
    }
    else
      return next.handle(req);
  }
}

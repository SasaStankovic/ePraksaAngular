import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthGuard } from '../_guards/auth.guard';
import { StudentGuard } from '../_guards/student.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LOGIN_URL = "http://localhost:3000/postojeciKorisnici";

  constructor(private http: HttpClient,
    private router: Router,
    private dialog: MatDialog,
    private authGuard: AuthGuard,
    private studentGuard: StudentGuard) { }

  login(user: any) {

    return this.http.get<any>(this.LOGIN_URL).subscribe(res => {
      const tmp = res.find((a: any) => {
        return a.email === user.email && a.password === user.password && a.rola === user.rola;
      })

      if (tmp) {
        this.dialog.closeAll();
        switch (user.rola) {
          case "student": this.router.navigate(['student']);
            localStorage.setItem('user', JSON.stringify({
              rola: 'student',
              ime: 'ime'
            }));
            break;
          case "komisija": this.router.navigate(['komisija']);
            localStorage.setItem('user', JSON.stringify({
              rola: 'komisija',
              ime: 'ime'
            }));
            break;
          case "mentor": this.router.navigate(['mentor']);
            localStorage.setItem('user', JSON.stringify({
              rola: 'mentor',
              ime: 'ime'
            }));
            break;
          case "firma": this.router.navigate(['firma']);
            localStorage.setItem('user', JSON.stringify({
              rola: 'firma',
              ime: 'ime'
            })); break;
        }
      }
      else
        alert("Pogresni pristupni podaci!");
    });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import jwtDecode, { JwtDecodeOptions } from 'jwt-decode';
import { AuthGuard } from '../_guards/auth.guard';
import { StudentGuard } from '../_guards/student.guard';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData={
    id:-1,
    role: '',
    token:'',
    notifications:[],
  }

  defaultHeaders: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient,
    private router: Router,
    private notifyService: NotificationsService) {

    this.defaultHeaders.set('Accept', 'application/json');
    this.defaultHeaders.set('Content-Type', 'application/json');

    this.getUserData();
  }

  login(user: any) {

    let obj = {
      email: user.email,
      password: user.password
    }

    this.http.post<any>("http://localhost:8080/authLogin", user, {
      headers: this.defaultHeaders,
      withCredentials: true
    }).subscribe(
      {
        next: res => {
          let tmp: any = jwtDecode(res.token);
          user.token = tmp;

          this.notifyService.getNotifications(tmp.jti).subscribe({
          next: not=>{
            console.log("NOTIFIKACIJE AUTH SERVICE GET",not)
              this.userData.notifications = not;
              localStorage.setItem("token", res.token);
              localStorage.setItem("user", JSON.stringify(tmp));
              localStorage.setItem("notifications", JSON.stringify(not));
              this.getUserData();
              this.router.navigate([(tmp.role as string).toLowerCase()]);
            },
            error: err=> console.log("auth service notiviccatoins>>.",err),
          })
        },
        error: err => {
          alert("Pogeršni pristupni podaci!");
        }
      }
    );
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('notifications')
    this.router.navigate(['welcome']);
  }

  public getUserData(){
    let obj;
    let tmp = localStorage.getItem('user');
    if (tmp != null)
    {
      obj = JSON.parse(tmp);
      this.userData.id = obj.jti;
      this.userData.role = obj.role.toLowerCase();
    } 
    let notTmp = localStorage.getItem('notifications');
    if(notTmp != null){
      let obj = JSON.parse(notTmp);
      this.userData.notifications = obj;
    }
  }

  public getRole(){
    return this.userData.role.toLocaleLowerCase();
  }

  isStudent():boolean{
    return this.userData.role == 'student';
  }

  isCommision():boolean{
    return this.userData.role == 'commission_member';
  }

  isCompany():boolean{
    return this.userData.role == 'company';
  }

  isMentor():boolean{
    return this.userData.role == 'mentor';
  }
}

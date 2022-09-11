import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { } from '../_guards/student.guard';
import { NavMeniService } from './nav-meni.service';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  exampleNotifications = [
    {
      notificationID: 1,
      subject: "subject1",
      text: "text1",
      createdAt: "createdAt1",
    },
    {
      notificationID: 2,
      subject: "subject2",
      text: "text2",
      createdAt: "createdAt2",
    }
  ];

  userData = {
    id: -1,
    role: '',
    token: '',
    notifications: this.exampleNotifications,
  }

  defaultHeaders: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient,
    private router: Router,
    private notifyService: NotificationsService,
    private navMeniService: NavMeniService) {

    this.defaultHeaders.set('Accept', 'application/json');
    this.defaultHeaders.set('Content-Type', 'application/json');

    this.getUserData();

    //TODO: get new notifications from backend, if user is already logged in
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
            next: not => {
              console.log("NOTIFIKACIJE AUTH SERVICE GET", not)
              this.userData.notifications = not;
              localStorage.setItem("token", res.token);
              localStorage.setItem("user", JSON.stringify(tmp));
              localStorage.setItem("notifications", JSON.stringify(not));
              localStorage.setItem("notificationsRead", "0"); //TODO: store notificationsRead in database and get it on logging
              this.getUserData();
              this.router.navigate([(tmp.role as string).toLowerCase()]);
            },
            error: err => console.log("auth service notiviccatoins>>.", err),
          })
        },
        error: err => {
          alert("Pogeršni pristupni podaci!");
        }
      }
    );
  }

  logout() {
    localStorage.clear();
    this.navMeniService.resetNavMeni();
    this.resetUserData();
    this.router.navigate(['welcome']);
  }

  resetUserData(): void {
    this.userData = {
      id: -1,
      role: '',
      token: '',
      notifications: [],
    }
  }

  public getUserData() {
    let obj;
    let tmp = localStorage.getItem('user');
    if (tmp != null) {
      obj = JSON.parse(tmp);
      this.userData.id = obj.jti;
      this.userData.role = obj.role.toLowerCase();
    }
    let notTmp = localStorage.getItem('notifications');
    if (notTmp != null) {
      let obj = JSON.parse(notTmp);
      this.userData.notifications = obj;
    }
  }

  public getRole() {
    return this.userData.role.toLocaleLowerCase();
  }

  isStudent(): boolean {
    return this.userData.role == 'student';
  }

  isCommision(): boolean {
    return this.userData.role == 'commission_member';
  }

  isCompany(): boolean {
    return this.userData.role == 'company';
  }

  isMentor(): boolean {
    return this.userData.role == 'mentor';
  }

  isLoggedIn(): boolean {
    return this.userData.id !== -1;
  }
}

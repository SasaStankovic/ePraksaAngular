import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { } from '../_guards/student.guard';
import { NotificationItem } from '../_tipovi/Notification';
import { NavMeniService } from './nav-meni.service';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  exampleNotifications: NotificationItem[] = [
    {
      notificationID: 1,
      subject: "subject1",
      text: "text1",
      createdAt: "createdAt1",
      delivered: false
    },
    {
      notificationID: 2,
      subject: "subject2",
      text: "text2",
      createdAt: "createdAt2",
      delivered: true
    }
  ];

  userData = {
    id: -1,
    role: '',
    token: '',
    notifications: this.exampleNotifications,
    unreadNotificationsCount: 0
  }

  defaultHeaders: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient,
    private router: Router,
    private notifyService: NotificationsService,
    private navMeniService: NavMeniService) {

    this.defaultHeaders.set('Accept', 'application/json');
    this.defaultHeaders.set('Content-Type', 'application/json');

    this.getUserData();

    if (this.isLoggedIn()) {
      this.notifyService.getNotifications(this.userData.id).subscribe(response => this.userData.notifications = response);
      this.checkUnreadNotifications();
    }
  }

  checkUnreadNotifications(): void {
    this.userData.unreadNotificationsCount = this.userData.notifications.filter(n => !n.delivered).length;
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
              this.getUserData();
              this.checkUnreadNotifications();
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
      unreadNotificationsCount: 0
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

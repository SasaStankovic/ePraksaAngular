import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginFormComponent } from 'src/app/login-form/login-form.component';
import { AuthService } from 'src/app/_servisi/auth.service';
import { NavMeniService } from 'src/app/_servisi/nav-meni.service';
import { NotificationsService } from 'src/app/_servisi/notifications.service';
import { NavMeniItem } from 'src/app/_tipovi/NavMeniItem';
import { NotificationItem } from 'src/app/_tipovi/Notification';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  items$: Observable<NavMeniItem> = this.navMeniService.items$;
  notifications!: NotificationItem[];
  newNotifications!: number;

  showPopUp(rola: string) {
    this.dialog.open(LoginFormComponent, {
      data: rola
    });
  }

  constructor(
    private dialog: MatDialog,
    public router: Router,
    public authService: AuthService,
    public navMeniService: NavMeniService,
    private notificationService: NotificationsService
  ) {
    this.notifications = this.authService.userData.notifications;
    this.newNotifications = this.authService.userData.unreadNotificationsCount;
  }

  notificationsClick(): void {
    this.newNotifications = this.authService.userData.unreadNotificationsCount = 0;
    this.notifications.forEach(notification =>
      this.notificationService.pathchNotification(notification.notificationID)
    );
  }

  navigateTo(path: string) {
    if (path == "prijava")
      this.showPopUp('');
    this.router.navigateByUrl(path);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_servisi/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input('items') items = [{ name: "Profil", navigate: "/1" }, { name: "Objava prakse", navigate: "/2" }, { name: "Pregled praksi", navigate: "/3" }];
  @Input('profilePath') profilePath = "";
  notifications!: any[];

  constructor(
    public router: Router,
    public authService: AuthService,
  ) {
    this.notifications = authService.userData.notifications;
  }

  ngOnInit(): void {
  }

  navigateTo(path: string) {
    if (path == "")
      return;
    this.router.navigateByUrl(path);
  }

  navigateToProfile() {
    if (this.profilePath == "")
      return;
    this.router.navigateByUrl(this.profilePath);
  }

}

import { Component, OnInit } from '@angular/core';
import { NavMeniService } from 'src/app/_servisi/nav-meni.service';

@Component({
  selector: 'app-komisija-wrapper',
  templateUrl: './komisija-wrapper.component.html',
  styleUrls: ['./komisija-wrapper.component.scss']
})
export class KomisijaWrapperComponent implements OnInit {

  buttons = [{ name: "Spisak praktikanata", navigate: "/commission_member/internships_view" },
  { name: "Zahtjevi za prakse", navigate: "/commission_member/internships" }];


  constructor(private navMeniService: NavMeniService) { }

  ngOnInit(): void {
    this.navMeniService.setItems({
      profilePath: "/commission_member/profil",
      items: this.buttons,
      loggedIn: true
    });
  }
}


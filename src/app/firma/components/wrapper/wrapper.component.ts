import { Component, OnInit } from '@angular/core';
import { NavMeniService } from 'src/app/_servisi/nav-meni.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  buttons = [{ name: "Prijave na konkurs", navigate: "/company/prijave-na-konkurs" },
  { name: "Objavljene prakse", navigate: "/company/internships_view/published" },
  { name: "Odbijene prakse", navigate: "/company/internships_view/denied" },
  { name: "Prakse na čekanju", navigate: "/company/internships_view/pending" },
  { name: "Objavi praksu", navigate: "/company/objava-prakse" },
  { name: "Mentori", navigate: "/company/mentors" }];

  constructor(private navMeniService: NavMeniService) { }

  ngOnInit(): void {
    this.navMeniService.setItems({ profilePath: "/company/profil", items: this.buttons, loggedIn: true });
  }

}

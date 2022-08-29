import { Component, OnInit } from '@angular/core';
import { NavMeniService } from 'src/app/_servisi/nav-meni.service';

@Component({
  selector: 'app-mentor-wrapper',
  templateUrl: './mentor-wrapper.component.html',
  styleUrls: ['./mentor-wrapper.component.scss']
})
export class MentorWrapperComponent implements OnInit {

  buttons = [{ name: "Pregled studenata", navigate: "/mentor/internships" },
  ];

  constructor(private navMeniService: NavMeniService) { }

  ngOnInit(): void {
    this.navMeniService.setItems({ profilePath: "/mentor/profil", items: this.buttons, loggedIn: true });
  }

}

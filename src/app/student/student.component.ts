
import { Component, OnInit } from '@angular/core';
import { NavMeniService } from '../_servisi/nav-meni.service';

@Component({
  selector: 'app-root',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  constructor(private navMeniService: NavMeniService) { }

  title = 'student pocetna'

  buttons = [{ name: "Izvještaj Mentora", navigate: "/student/mentor-report" },
  { name: "Dnevnik Rada", navigate: "/student/dnevnik-rada" },
  { name: "Moji konkursi", navigate: "/student/my-applicaitons" },
  { name: "Prakse", navigate: "/student" }];


  ngOnInit(): void {
    this.navMeniService.setItems({ profilePath: "/student/profil", items: this.buttons, loggedIn: true });
  }
}


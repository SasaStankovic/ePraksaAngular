
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  title = 'student pocetna'

  buttons = [{ name: "Izvještaj Mentora", navigate: "/student/mentor-report" },
  { name: "Dnevnik Rada", navigate: "/student/dnevnik-rada" },
  { name: "Prakse", navigate: "/student" },
  { name: "Moji konkursi", navigate: "/student/my-applicaitons" }];


}

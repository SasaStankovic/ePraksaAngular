import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentComponent } from 'src/app/student/student.component';
import { SutdentProfilComponent } from 'src/app/student/sutdent-profil/sutdent-profil.component';
import { Student } from 'src/app/_tipovi/Student';

@Component({
  selector: 'app-pregled-studenta',
  templateUrl: './pregled-studenta.component.html',
  styleUrls: ['./pregled-studenta.component.scss']
})
export class PregledStudentaComponent {

  @Input() student!: Student;
  internshipId!: number;

  constructor(public route: ActivatedRoute) {
    route.params.subscribe(p => this.internshipId = p['internshipId']);
  }


}

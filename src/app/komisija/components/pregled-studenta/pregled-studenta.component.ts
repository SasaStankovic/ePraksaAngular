import { Component, Input, OnInit } from '@angular/core';
import { StudentComponent } from 'src/app/student/student.component';
import { SutdentProfilComponent } from 'src/app/student/sutdent-profil/sutdent-profil.component';
import { Student } from 'src/app/tipovi/Student';

@Component({
  selector: 'app-pregled-studenta',
  templateUrl: './pregled-studenta.component.html',
  styleUrls: ['./pregled-studenta.component.scss']
})
export class PregledStudentaComponent implements OnInit {

  @Input()
  student!:Student;


  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.student);
  }



}

import { ArrayType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/tipovi/Student';

import { StudentService } from 'src/app/_servisi/student.service';

@Component({
  selector: 'app-sutdent-profil',
  templateUrl: './sutdent-profil.component.html',
  styleUrls: ['./sutdent-profil.component.scss']
})
export class SutdentProfilComponent implements OnInit {

student!:Student;

  constructor(private profileData:StudentService) { 
    this.student = new Student();
    console.log("Student ime:"+this.student.firstName+" "+this.student.lastName);
  }

  ngOnInit(): void {
    this.profileData.getProfileData().subscribe((result:any)=>{
      this.student = result;
    })
  }

  

}

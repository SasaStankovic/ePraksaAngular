import { ArrayType } from '@angular/compiler';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscribable, Unsubscribable } from 'rxjs';
import { Student } from 'src/app/tipovi/Student';
import { AuthService } from 'src/app/_servisi/auth.service';

import { StudentService } from 'src/app/_servisi/student.service';

@Component({
  selector: 'app-sutdent-profil',
  templateUrl: './sutdent-profil.component.html',
  styleUrls: ['./sutdent-profil.component.scss']
})
export class SutdentProfilComponent implements OnInit, OnDestroy {

  studentId = -1;
  student!: Student;
  unsubscribe!:Unsubscribable;
  constructor(private studentService: StudentService,
    private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.unsubscribe = this.route.params.subscribe(res => {
      console.log("student id>>", res);
      if (res['id'])
        this.studentId = res['id'];
      else
        this.studentId = this.authService.userData.id;
    })

    this.studentService.getStudentById(this.studentId).subscribe((res: any) => {
      this.student = res;
      console.log("Student profile data>>", res);
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }
}

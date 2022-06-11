import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_tipovi/Student';
import { StudentService } from 'src/app/_servisi/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pregled-praktikanata',
  templateUrl: './pregled-praktikanata.component.html',
  styleUrls: ['./pregled-praktikanata.component.scss']
})
export class PregledPraktikanataComponent {

  praktikanti!: Student[];


  constructor(
    private studentService: StudentService,
    public route: ActivatedRoute,
  ) {
    route.params.subscribe(param => {
      this.studentService.getPraktikanti(param['internshipId']).subscribe((res: any) => {
        this.praktikanti = res;
        console.log("prakstikanti>>", res);
      }, err => console.log(err));
    })
  }


}

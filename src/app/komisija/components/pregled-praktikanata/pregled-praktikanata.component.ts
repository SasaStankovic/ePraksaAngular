import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/tipovi/Student';
import { StudentService } from 'src/app/_servisi/student.service';

@Component({
  selector: 'app-pregled-praktikanata',
  templateUrl: './pregled-praktikanata.component.html',
  styleUrls: ['./pregled-praktikanata.component.scss']
})
export class PregledPraktikanataComponent implements OnInit {

  praktikanti!: Student[];
  

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getPraktikanti().subscribe((res:any)=>{
      this.praktikanti = res;
      console.log("prakstikanti>>",res);
    });
  }

}

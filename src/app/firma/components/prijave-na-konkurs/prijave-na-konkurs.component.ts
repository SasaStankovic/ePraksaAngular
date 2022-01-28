import { NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FirmaService } from 'src/app/_servisi/firma.service';
import { StudentService } from 'src/app/_servisi/student.service';

@Component({
  selector: 'app-prijave-na-konkurs',
  templateUrl: './prijave-na-konkurs.component.html',
  styleUrls: ['./prijave-na-konkurs.component.scss']
})
export class PrijaveNaKonkursComponent implements OnInit {

  
  isVisible!:boolean;
  indexStudenta!:number;

  podaciOKonkursu = {
    idKonkursa:"",
    studenti:[{id:"",ime:"",prezime:""}]
  }

  unsubscribe!: any;

  selectedKonkurs = "Odaberite konkurs!";
  selectKonkurs!: FormGroup;

  students!: Array<Object>;
  student!: {
    ime: String,
    prezime: String
  }

  constructor(private formBuilder: FormBuilder,
              private firmaService: FirmaService,
              private studentService:StudentService) {
    this.selectKonkurs = formBuilder.group({
      konkurs: [null]
    });

  }

  ngOnInit(): void {
    this.isVisible = false;
  }

  aktivniKonkursi = [{ id: "11", naziv: "Praksa 11" }, { id: "12", naziv: "Praksa 12" }, { id: "13", naziv: "Praksa 13" }];

  getAplikacije() {

    this.selectedKonkurs = this.selectKonkurs.value['konkurs'];
    if (this.selectedKonkurs == "11") {
      this.unsubscribe = this.firmaService.getAplikacije11(this.selectedKonkurs).subscribe((res: any) => {
        this.podaciOKonkursu = res;
        console.log(this.podaciOKonkursu);
        this.isVisible = true;
      });
    }
    else if(this.selectedKonkurs == "12")
    {
      this.unsubscribe = this.firmaService.getAplikacije12(this.selectedKonkurs).subscribe((res: any) => {
        this.podaciOKonkursu = res;
        console.log(this.podaciOKonkursu);
        this.isVisible = true;
      });
    }
    // this.firmaService.getAplikacije(this.selectedKonkurs).subscribe({
    //   next:(data)=>{
    //     console.log(data);
    //   },
    //   error: (err)=>console.log(err)
    // });
  }



  getStudent(i:number){
    console.log(this.podaciOKonkursu.studenti[i]);
    // this.studentService.getStudentById(i.toString());
    this.studentService.getProfileData();
  }
  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }
}

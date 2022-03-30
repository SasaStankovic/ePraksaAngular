import { NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { OdbijanjeComponent } from 'src/app/shared/odbijanje/odbijanje.component';
import { Application } from 'src/app/tipovi/application';
import { Praksa } from 'src/app/tipovi/Praksa';
import { Student } from 'src/app/tipovi/Student';
import { ApplicationsService } from 'src/app/_servisi/applications.service';
import { AuthService } from 'src/app/_servisi/auth.service';
import { FirmaService } from 'src/app/_servisi/firma.service';
import { PrakseService } from 'src/app/_servisi/prakse.service';
import { StudentService } from 'src/app/_servisi/student.service';

@Component({
  selector: 'app-prijave-na-konkurs',
  templateUrl: './prijave-na-konkurs.component.html',
  styleUrls: ['./prijave-na-konkurs.component.scss']
})
export class PrijaveNaKonkursComponent implements OnInit {


  student!: Student;

  isVisible!: boolean;

  internships$!: Subscribable<Praksa[]>;
  applications!: Application[];

  unsubscribe!: any;

  form!: FormGroup;

  status = ["PENDING", "ACCEPTED", "DENIED"];


  constructor(private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private authService: AuthService,
    private prakseService: PrakseService,
    private appService: ApplicationsService,
    private route: Router,
    private snackBar: MatSnackBar) {
    this.form = formBuilder.group({
      internshipId: [null],
      status: [""],
    });
    this.student = new Student;
  }

  ngOnInit(): void {
    this.isVisible = false;
    this.internships$ = this.prakseService.getInternshipByCompany(this.authService.userData.id, true);
    let unsub = this.prakseService.getInternshipByCompany(this.authService.userData.id, true)
      .subscribe({
        next: res => {
          console.log(res);
          this.form.controls['internshipId'].setValue(res[0]?.internshipId);
          this.form.controls['status'].setValue('PENDING');
          this.getAplikacije();
        },
        error: err => console.log(err),
      });
  }

  aktivniKonkursi = [{ id: "11", naziv: "Praksa 11" }, { id: "12", naziv: "Praksa 12" }, { id: "13", naziv: "Praksa 13" }];

  getAplikacije() {
    // this.applications$ = this.appService.getApplicationsByCompanyId(this.authService.userData.id);
    this.appService.getApplicationsByCompanyId(this.form.value.internshipId,this.form.value.status).subscribe(
      res => { console.log("aplikacije na praksu", res); this.applications = res; },
      err => console.log(err),
    )
  }

  getStudent(id: number) {
    this.route.navigate(['/company/students/', id]);
  }

  showPopUp(studentId: number) {
    this.dialog.open(OdbijanjeComponent, {
      data: {
        studentId: studentId,
        internshipId: this.form.value.internshipId
      }
    });
  }

  approveApplication(studentId: number) {
    this.appService.putApplication(this.form.value.internshipId, studentId, "accepted").subscribe({
      next: res => { location.reload(); this.snackBar.open("Uspjesno ste odobrili prijavu", "OK"); },
      error: err => { console.log(err); console.log("PRAKSA ID = ", this.form.value.internshipId, "STUDENT ID =", studentId) },
    })
  }


  ngOnDestroy(): void {
    // this.unsubscribe.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscribable } from 'rxjs';
import { OdbijanjeComponent } from 'src/app/shared/odbijanje/odbijanje.component';
import { Application } from 'src/app/_tipovi/application';
import { InternshipStatus } from 'src/app/_tipovi/internshipStatus';
import { Praksa } from 'src/app/_tipovi/Praksa';
import { Student } from 'src/app/_tipovi/Student';
import { ApplicationsService } from 'src/app/_servisi/applications.service';
import { AuthService } from 'src/app/_servisi/auth.service';
import { PrakseService } from 'src/app/_servisi/prakse.service';

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
    this.internships$ = this.prakseService.getInternshipsByIdAndStatus(this.authService.userData.id, InternshipStatus.Published);
    let unsub = this.prakseService.getInternshipsByIdAndStatus(this.authService.userData.id, InternshipStatus.Published)
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

  getAplikacije() {
    this.appService.getApplicationsByCompanyId(this.form.value.internshipId, this.form.value.status).subscribe(
      res => { this.applications = res; },
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
      error: err => { console.log(err); },
    })
  }


  ngOnDestroy(): void {
    // this.unsubscribe.unsubscribe();
  }

}

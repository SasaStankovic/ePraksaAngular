import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subscribable } from 'rxjs';
import { AuthService } from 'src/app/_servisi/auth.service';
import { MentorReportService } from 'src/app/_servisi/mentor-report.service';
import { MentorReplies } from 'src/app/_tipovi/mentor-replies-enum';
import { MentorReport } from 'src/app/_tipovi/mentor-report';

@Component({
  selector: 'app-menotr-report',
  templateUrl: './menotr-report.component.html',
  styleUrls: ['./menotr-report.component.scss']
})
export class MenotrReportComponent implements OnInit {

  hasReport = false;
  title = "Upitnik o studentu"
  questionsArr!: any[];
  answers = MentorReplies.answers;
  studentId!: number;
  internshipId!: number;
  reportId!: number;

  isMentor: boolean = false;

  form = this.fb.group({
    input: this.fb.array([]),
    mentorsComment: [null, Validators.required]
  })

  form2 = this.fb.group({
    obligations: this.fb.array([]),
    numberOfDays: [null, Validators.required],
    numberOfHours: [null, Validators.required],
    periodOfInternshipFrom: [null, Validators.required],
    periodOfInternshipUntil: [null, Validators.required],
    mentor: [],
  })

  constructor(public fb: FormBuilder,
    public mentorReportService: MentorReportService,
    public auth: AuthService,
    public route: ActivatedRoute,
    private _location: Location,
    public snack: MatSnackBar,
  ) {
    route.params.subscribe(par => {
      this.internshipId = par['internshipId'];
      this.studentId = par['studentId'];
    });

    this.isMentor = auth.isMentor();
  }

  ngOnInit(): void {
    if (this.auth.isMentor() || this.auth.isCommision()) {
      if (this.auth.isCommision()) {
        this.form.disable();
        this.form2.disable();
      }
      this.mentorReportService.getMentorReport(this.internshipId, this.studentId).subscribe(res => {
        this.hasReport = true;
        console.log("GEt dnevnika", res);
        this.form.controls['mentorsComment'].setValue(res?.questionnaireJSON?.mentorsComment);
        res?.questionnaireJSON?.input.forEach((e: any) => {
          this.addQuestion(e.id, e.question, e.answer);
        });
        this.questionsArr = res?.questionnaireJSON?.input;
        this.reportId = res.reportId;

        this.form2.controls['mentor'].setValue(res?.opinionJSON?.mentor);
        this.form2.controls['numberOfDays'].setValue(res?.opinionJSON?.numberOfDays);
        this.form2.controls['numberOfHours'].setValue(res?.opinionJSON?.numberOfHours);
        this.form2.controls['periodOfInternshipFrom'].setValue(res?.opinionJSON?.periodOfInternshipFrom);
        this.form2.controls['periodOfInternshipUntil'].setValue(res?.opinionJSON?.periodOfInternshipUntil);
        res?.opinionJSON?.obligations.forEach((e: any) => {
          this.addObligation(e.descriptionOfTheObligation);
        });
        if (!this.auth.isMentor()) {
          this.form.disable();
          this.form2.disable();
          this.disableArray();
        }
      },
        err => { this.hasReport = false; console.log("VAVSAVASV") });
    }
    else {
      if (this.auth.isStudent())
        this.studentId = this.auth.userData.id;

      this.mentorReportService.gerMentorReportByStydentId(this.studentId).subscribe(
        {
          next: res => {
            this.hasReport = true;
            console.log("GEt dnevnika", res);
            this.form.controls['mentorsComment'].setValue(res?.questionnaireJSON?.mentorsComment);
            res?.questionnaireJSON?.input.forEach((e: any) => {
              this.addQuestion(e.id, e.question, e.answer);
            });
            this.questionsArr = res?.questionnaireJSON?.input;
            this.reportId = res.reportId;

            this.form2.controls['mentor'].setValue(res?.opinionJSON?.mentor);
            this.form2.controls['numberOfDays'].setValue(res?.opinionJSON?.numberOfDays);
            this.form2.controls['numberOfHours'].setValue(res?.opinionJSON?.numberOfHours);
            this.form2.controls['periodOfInternshipFrom'].setValue(res?.opinionJSON?.periodOfInternshipFrom);
            this.form2.controls['periodOfInternshipUntil'].setValue(res?.opinionJSON?.periodOfInternshipUntil);
            res?.opinionJSON?.obligations.forEach((e: any) => {
              this.addObligation(e.descriptionOfTheObligation);
            });
            if (!this.auth.isMentor()) {
              this.form.disable();
              this.form2.disable();
              this.disableArray();
            }
          },
          error: err => {
            this.hasReport = false;
          },
          complete: () => console.log('sdasdsdasds')
        });
    }
  }


  get input(): FormArray {
    return this.form.controls['input'] as FormArray;
  }

  get obligations(): FormArray {
    return this.form2.controls['obligations'] as FormArray;
  }

  addQuestion(id: any, question: any, answer = null): void {
    const tmp = this.fb.group({
      id: [id],
      answer: [answer, Validators.required],
      question: [question]
    });
    this.input.push(tmp);
  }

  addObligation(value: any = null) {
    const tmp = this.fb.group({
      descriptionOfTheObligation: [value, Validators.required],
    });
    this.obligations.push(tmp);
  }

  delete(i: number) {
    this.obligations.removeAt(i);
  }

  print() {
    console.log(this.form2.value)
  }

  patchValues() {
    for (let index = 0; index < this.input.length; index++) {
      this.input.get(index + '')?.get('answer')?.setValue('DJELIMICNOSESLAZEM');

    }
    this.form.controls['mentorsComment'].setValue('bla');
  }

  setTitle1() {
    this.title = "Opis aktivnosti studenta"
  }

  setTitle2() {
    this.title = "Upitnik o studentu"
  }

  submit() {
    let data = {
      opinionJSON: this.form2.value,
      questionnaireJSON: this.form.value,
      reportId: this.reportId
    }
    this.mentorReportService.postMentorReport(this.internshipId, this.studentId, data).subscribe({
      next: () => {
        this._location.back();
        this.snack.open("Uspješno ste predali izvještaj", "Ok");
      }
    });
  }

  disableArray() {
    this.obligations.at(0)?.get('descriptionOfTheObligation')?.disable();
  }
}
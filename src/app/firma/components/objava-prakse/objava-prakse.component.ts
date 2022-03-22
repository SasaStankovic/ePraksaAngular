import { DatePipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, _SnackBarContainer } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Praksa } from 'src/app/tipovi/Praksa';
import { Mentor } from 'src/app/tipovi/mentor';
import { AuthService } from 'src/app/_servisi/auth.service';
import { FirmaService } from 'src/app/_servisi/firma.service';
import { PrakseService } from 'src/app/_servisi/prakse.service';

@Component({
  selector: 'app-objava-prakse',
  templateUrl: './objava-prakse.component.html',
  styleUrls: ['./objava-prakse.component.scss']
})
export class ObjavaPrakseComponent implements OnInit {

  mentors!:Array<Mentor>;

  today: Date = new Date();

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdForm!: FormGroup;
  fourthForm!: FormGroup;
  fifthForm!: FormGroup;

  praksa = new Praksa();

  errorMessage = "Popunite sva polja!";


  constructor(private formBuilder: FormBuilder,
    private praksaServis: PrakseService,
    private router: Router,
    private snackBar: MatSnackBar,
    private datePipe: DatePipe,
    private firmaService: FirmaService,
    private authService: AuthService,) { }


  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      'nazivPrakse': new FormControl("", [Validators.required])
    });


    this.secondFormGroup = this.formBuilder.group({
      'vrstaPrakse': new FormControl('', Validators.required),
      'SI': new FormControl(false),
      'RI': new FormControl(false),
      'EL': new FormControl(false),
      'TEL': new FormControl(false),
      'god1': new FormControl(),
      'god2': new FormControl(),
      'god3': new FormControl(),
      'god4': new FormControl(),
      'brojSati': new FormControl()
    });

    this.thirdForm = this.formBuilder.group({
      'oblastRada': new FormControl('', Validators.required),
      'programRada': new FormControl('', Validators.required)
    })

    this.fourthForm = this.formBuilder.group({
      'detalji': new FormControl(),
      'reklamniTekst': new FormControl(),
      'mentor': new FormControl(),
      'grad': new FormControl(),
      'cv': new FormControl(true),
      'motPismo': new FormControl(false),
      'link': new FormControl()
    })

    this.fifthForm = new FormGroup({
      'periodOd': new FormControl('', Validators.required),
      'periodDo': new FormControl('', Validators.required),
      'rok': new FormControl('', Validators.required),
    });

    let praksa;
    if ((praksa = this.secondFormGroup.get('vrstaPrakse')) != null) {
      praksa.setValue("LJETNA");
    }

    let unsub = this.firmaService.getMentors(this.authService.userData.id).subscribe(
      data=>{
        console.log(data);
        this.mentors = data;
      },err=>console.log(err)
    );


  }

  secondFormInvalid(): boolean {

    if (this.secondFormGroup.value['SI'] || this.secondFormGroup.value['RI'] ||
      this.secondFormGroup.value['EL'] || this.secondFormGroup.value['TEL']) {

      if (this.secondFormGroup.value['god1'] || this.secondFormGroup.value['god2'] ||
        this.secondFormGroup.value['god3'] || this.secondFormGroup.value['god4']) {

        if (this.secondFormGroup.get('vrstaPrakse')?.value === 'STRUCNA' &&
          this.secondFormGroup.value['brojSati'] >= 150 && this.secondFormGroup.value['god4'])
          return false;
        else
          this.errorMessage = "U strucnoj praksi mora ucestvovati cetvrta godina studija!";

        if (this.secondFormGroup.get('vrstaPrakse')?.value === 'STRUCNA' &&
          this.secondFormGroup.value['brojSati'] == null ||
          this.secondFormGroup.value['brojSati'] < 150)
          this.errorMessage = "Minimalan broj sati za strucnu praksu je 150!";
        if (this.secondFormGroup.get('vrstaPrakse')?.value === 'LJETNA')
          return false;
      }
      else
        this.errorMessage = "Odaberite godinu studija!";
    }
    else
      this.errorMessage = "Za koje smjerove je praksa namjenjena?";
    return true;
  }

  fourthFormInvalid(): boolean {

    return true;
  }

  submitData() {

    this.praksa.title = this.firstFormGroup.value['nazivPrakse'];
    this.praksa.internshipType = this.secondFormGroup.value['vrstaPrakse'];
    let smjer: any = [];
    if (this.secondFormGroup.value['SI'])
      smjer.push("Softversko inzenjerstvo");
    if (this.secondFormGroup.value['RI'])
      smjer.push("Racunarsko inzenjerstvo");
    if (this.secondFormGroup.value['EL'])
      smjer.push("Elektronika");
    if (this.secondFormGroup.value['TEL'])
      smjer.push("Telekomunikacije");
    this.praksa.courses = smjer;
    this.praksa.description = this.fourthForm.value['reklamniTekst'];

    let godine: any = [];
    if (this.secondFormGroup.value['god1'])
      godine.push(1);
    if (this.secondFormGroup.value['god2'])
      godine.push(2);
    if (this.secondFormGroup.value['god3'])
      godine.push(3);
    if (this.secondFormGroup.value['god4'])
      godine.push(4);
    this.praksa.years = godine;

    this.praksa.workHours = this.secondFormGroup.value['brojSati'];
    this.praksa.internshipField = this.thirdForm.value['oblastRada'];
    this.praksa.schedule = this.thirdForm.value['programRada'];
    this.praksa.details = this.fourthForm.value['detalji'];

    this.praksa.requiredCV = this.fourthForm.controls['cv'].value;
    this.praksa.requiredLetter = this.fourthForm.controls['motPismo'].value;
    this.praksa.link = this.fourthForm.value['link'];

    this.praksa.submissionDue = this.datePipe.transform(new Date(this.fifthForm.controls['rok'].value), "yyyy-MM-dd")?.toString();
    this.praksa.startDate = this.datePipe.transform(new Date(this.fifthForm.controls['periodOd'].value), "yyyy-MM-dd")?.toString();
    this.praksa.endDate = this.datePipe.transform(new Date(this.fifthForm.controls['periodDo'].value), "yyyy-MM-dd")?.toString();


    this.praksa.mentorId = this.fourthForm.value['mentor'];
    //TODO Dohvatanje mentora svih i dodjela IDa
    // this.praksa.mentorId = 13;

    let companyId;
    let tmpObj;
    if ((tmpObj = localStorage.getItem('user')) != null)
      companyId = JSON.parse(tmpObj).jti;
    this.praksa.companyId = companyId;

    this.praksa.city = this.fourthForm.value['grad'];

    console.log(this.praksa);

    this.praksaServis.postInternShip(this.praksa).subscribe({
      next: (d) => {
        if (this.secondFormGroup.controls['vrstaPrakse'].value == 'LJETNA')
          this.snackBar.open("Uspjesno ste objavili praksu", "Ok");
        else
          this.snackBar.open("Praksa ce biti pregledana od strane strucne komisije nakon cega ce bti odbijena ili objavljena", "Ok");

        this.router.navigateByUrl('/company');
      },
      error: (err) => { console.log("Greska!", err); }
    });

  }


  cancel() {
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.thirdForm.reset();
    this.fourthForm.reset();
    this.fifthForm.reset();
    this.router.navigateByUrl('/company');
  }

}
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, _SnackBarContainer } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { PrakseService } from 'src/app/_servisi/prakse.service';

@Component({
  selector: 'app-objava-prakse',
  templateUrl: './objava-prakse.component.html',
  styleUrls: ['./objava-prakse.component.scss']
})
export class ObjavaPrakseComponent implements OnInit {


  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdForm!: FormGroup;
  fourthForm!: FormGroup;
  fifthForm!: FormGroup;

  praksa = {
    nazivPrakse: "",
    kompanija: "",
    vrstaPrakse: "",
    periodTrajanja: "",
    smjer: [""],
    oPraksi: "",
    mentor: "",
    godinaFakulteta: "",
    brojRadnihSati: "",
    oblastRada: "",
    planRada: "",
    detalji: "",
    dokumenti: [""],
    linkDoPrakse: "",
    rokPrijave: "",
    grad: "",
  }

  errorMessage = "Popunite sva polja!";

  mentori = [
    { id: 'id1', ime: 'Ime1', prezime: 'Prezime1' },
    { id: 'id2', ime: 'Ime2', prezime: 'Prezime2' },
    { id: 'id3', ime: 'Ime3', prezime: 'Prezime3' },
  ];

  constructor(private formBuilder: FormBuilder,
    private praksaServis: PrakseService,
    private router: Router,
    private snackBar: MatSnackBar) { }


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
      'cv': new FormControl(),
      'motPismo': new FormControl(),
      'link': new FormControl()
    })

    this.fifthForm = new FormGroup({
      'periodOd': new FormControl('', Validators.required),
      'periodDo': new FormControl('', Validators.required),
      'rok': new FormControl('', Validators.required),
    });

    let praksa;
    if ((praksa = this.secondFormGroup.get('vrstaPrakse')) != null) {
      praksa.setValue("ljetna");
    }
  }

  secondFormInvalid(): boolean {

    if (this.secondFormGroup.value['SI'] || this.secondFormGroup.value['RI'] ||
      this.secondFormGroup.value['EL'] || this.secondFormGroup.value['TEL']) {

      if (this.secondFormGroup.value['god1'] || this.secondFormGroup.value['god2'] ||
        this.secondFormGroup.value['god3'] || this.secondFormGroup.value['god4']) {

        if (this.secondFormGroup.get('vrstaPrakse')?.value === 'strucna' &&
          this.secondFormGroup.value['brojSati'] >= 150 && this.secondFormGroup.value['god4'])
          return false;
          else
          this.errorMessage = "U strucnoj praksi mora ucestvovati cetvrta godina studija!";

        if (this.secondFormGroup.get('vrstaPrakse')?.value === 'strucna' &&
          this.secondFormGroup.value['brojSati'] == null ||
          this.secondFormGroup.value['brojSati'] < 150)
          this.errorMessage = "Minimalan broj sati za strucnu praksu je 150!";
          if (this.secondFormGroup.get('vrstaPrakse')?.value === 'ljetna')
            return false;
      }
      else
        this.errorMessage = "Odaberite godinu studija!";
    }
    else
      this.errorMessage = "Za koje smjerove je praksa namjenjena?";
    return true;
  }

  fourthFormInvalid():boolean{

    return true;
  }

  submitData() {

    this.praksa.nazivPrakse = this.firstFormGroup.value['nazivPrakse'];
    this.praksa.vrstaPrakse = this.secondFormGroup.value['vrstaPrakse'];
    this.praksa.periodTrajanja = this.fifthForm.value['periodOd'];
    this.praksa.periodTrajanja += "-";
    this.praksa.periodTrajanja += this.fifthForm.value['periodDo'];

    let smjer: any = [];

    if (this.secondFormGroup.value['SI'])
      smjer.push("Softversko inzenjerstvo");
    if (this.secondFormGroup.value['RI'])
      smjer.push("Racunarsko inzenjerstvo");
    if (this.secondFormGroup.value['EL'])
      smjer.push("Elektronika");
    if (this.secondFormGroup.value['TEL'])
      smjer.push("Telekomunikacije");
    this.praksa.smjer = smjer;
    this.praksa.oPraksi = this.fourthForm.value['reklamniTekst'];

    let godina: any = [];
    if (this.secondFormGroup.value['god1'])
      godina.push("I");
    if (this.secondFormGroup.value['god2'])
      godina.push("II");
    if (this.secondFormGroup.value['god3'])
      godina.push("III");
    if (this.secondFormGroup.value['god4'])
      godina.push("VI");
    this.praksa.godinaFakulteta = godina;

    this.praksa.brojRadnihSati = this.secondFormGroup.value['brojSati'];
    this.praksa.oblastRada = this.thirdForm.value['oblastRada'];
    this.praksa.planRada = this.thirdForm.value['programRada'];
    this.praksa.detalji = this.fourthForm.value['detalji'];

    let dokumenti = [];

    if (this.fourthForm.value['cv'])
      dokumenti.push("CV");
    if (this.fourthForm.value['motPismo'])
      dokumenti.push("Motivaciono pismo");

    this.praksa.dokumenti = dokumenti;
    this.praksa.linkDoPrakse = this.fourthForm.value['link'];
    this.praksa.rokPrijave = this.fifthForm.value['rok'];

    this.praksa.mentor = this.fourthForm.value['mentor'];
    this.praksa.grad = this.fourthForm.value['grad'];

    console.log(this.praksa);

    this.praksaServis.postInternShip(this.praksa).subscribe({
      next: (d) => {
        this.snackBar.open("Uspjesno ste objavili praksu", "Ok");
        this.router.navigateByUrl('/firma');
      },
      // complete: ()=>{ console.log("Uspjesno");
      // },
      error: (err) => { console.log("Greska!" + err); }
    });
  }


  cancel() {
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.thirdForm.reset();
    this.fourthForm.reset();
    this.fifthForm.reset();
    this.router.navigateByUrl('/firma');
  }

}
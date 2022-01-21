import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-objava-prakse',
  templateUrl: './objava-prakse.component.html',
  styleUrls: ['./objava-prakse.component.scss']
})
export class ObjavaPrakseComponent implements OnInit {


  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  vrstaPrakse!: FormGroup;

  campaignOne: FormGroup;
  campaignTwo: FormGroup;

  mentori = [
    { id: 'id1', ime: 'Ime1', prezime: 'Prezime1' },
    { id: 'id2', ime: 'Ime2', prezime: 'Prezime2' },
    { id: 'id3', ime: 'Ime3', prezime: 'Prezime3' },
  ];

  constructor(private formBuilder: FormBuilder) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date()),
      end: new FormControl(new Date()),
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date()),
      end: new FormControl(new Date()),
    });
  }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      'nazivPrakse': new FormControl("", [Validators.required])
    });

    this.secondFormGroup = this.formBuilder.group({
      'smjer': new FormControl(),
      'SI': new FormControl(false),
      'RI': new FormControl(false),
      'EL': new FormControl(false),
      'TEL': new FormControl(false),
      'vrstaPrakse': new FormControl('', Validators.required),
      'brojSati':new FormControl(150)
    });
    let praksa;
    if((praksa = this.secondFormGroup.get('vrstaPrakse'))!= null)
      praksa.setValue("strucna");
  }
  
}
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prijave-na-konkurs',
  templateUrl: './prijave-na-konkurs.component.html',
  styleUrls: ['./prijave-na-konkurs.component.scss']
})
export class PrijaveNaKonkursComponent implements OnInit {

  selectedKonkurs = "Odaberite konkurs!";
  selectKonkurs!: FormGroup;

  students!: Array<any>;
  student!: {
    ime: String,
    prezime: String
  }

  constructor(private formBuilder:FormBuilder) {
    this.selectKonkurs = formBuilder.group({
      konkurs: [null]
    });
    
  }

  ngOnInit(): void {
  }

  aktivniKonkursi = [{ id: "11", naziv: "Praksa 11" }, { id: "12", naziv: "Praksa 12" }, { id: "13", naziv: "Praksa 13" }];
  log() {
    this.selectedKonkurs = this.selectKonkurs.value['konkurs'];
  }

}

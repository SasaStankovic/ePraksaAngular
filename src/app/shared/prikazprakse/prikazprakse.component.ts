import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetaljanPregledPrakseComponent } from '../detaljan-pregled-prakse/detaljan-pregled-prakse.component';


@Component({
  selector: 'app-prikazprakse',
  templateUrl: './prikazprakse.component.html',
  styleUrls: ['./prikazprakse.component.scss']
})
export class PrikazprakseComponent implements OnInit {

  @Input()
  praksa = {
    id: 0,
    kompanija: String,
    vrstaPrakse: String,
    periodTrajanja: String,
    smjer: String,
    oPraksi: String,
    godinaFakulteta: Number,
    brojRadnihSati: Number,
    oblastRada: String,
    planRada: String,
    detalji: String,
    dokumenti: String,
    linkDoPrakse:  String,
    rokPrijave: String
  }

  constructor(private dialog: MatDialog) {

  }

  ngOnInit():void {}

  showPopUp() {
    this.dialog.open(DetaljanPregledPrakseComponent, {
      data: {
        data: this.praksa
      }
    });
  }

}

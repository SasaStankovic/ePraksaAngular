import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detaljan-pregled-prakse',
  templateUrl: './detaljan-pregled-prakse.component.html',
  styleUrls: ['./detaljan-pregled-prakse.component.scss']
})
export class DetaljanPregledPrakseComponent implements OnInit {

  isStudent = false;
  praksa = {
    id: Number,
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
    linkDoPrakse: String,
    rokPrijave: String
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.praksa = data.data;
  }

  ngOnInit() {
    let item = localStorage.getItem('user');
    if (item !== null)
      this.isStudent = (JSON.parse(item).rola == "student" ? true : false);
  }

  closePopUp() {
    this.dialog.closeAll();
  }


}

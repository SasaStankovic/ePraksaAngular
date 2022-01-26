import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prijave-na-konkurs',
  templateUrl: './prijave-na-konkurs.component.html',
  styleUrls: ['./prijave-na-konkurs.component.scss']
})
export class PrijaveNaKonkursComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  konkurs={
    id: "1",
    naziv:"Praksa 12"
  }

  aktivniKonkursi=[{id:"11", naziv:"Praksa 11"},{id:"12", naziv:"Praksa 12"},{id:"13", naziv:"Praksa 13"} ];

}

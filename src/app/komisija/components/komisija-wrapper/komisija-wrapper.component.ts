import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KomisijaService } from 'src/app/_servisi/komisija.service';

@Component({
  selector: 'app-komisija-wrapper',
  templateUrl: './komisija-wrapper.component.html',
  styleUrls: ['./komisija-wrapper.component.scss']
})
export class KomisijaWrapperComponent implements OnInit {

  buttons = [{ name: "Spisak praktikanata", navigate: "/commission_member/internships_view" },
  { name: "Zahtjevi za prakse", navigate: "/commission_member/internships" }];


  constructor() { }

  ngOnInit(): void { }
}


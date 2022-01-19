import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KomisijaService } from 'src/app/_servisi/komisija.service';

@Component({
  selector: 'app-komisija-wrapper',
  templateUrl: './komisija-wrapper.component.html',
  styleUrls: ['./komisija-wrapper.component.scss']
})
export class KomisijaWrapperComponent implements OnInit {

  headerText!: string;

  constructor(private komisijaService: KomisijaService) { }

  ngOnInit(): void {  }
}


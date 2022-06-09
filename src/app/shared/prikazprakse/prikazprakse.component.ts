import { AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Company } from 'src/app/_tipovi/company';
import { Mentor } from 'src/app/_tipovi/mentor';
import { Praksa } from 'src/app/_tipovi/Praksa';
import { AuthService } from 'src/app/_servisi/auth.service';
import { PrakseService } from 'src/app/_servisi/prakse.service';
import { DetaljanPregledPrakseComponent } from '../detaljan-pregled-prakse/detaljan-pregled-prakse.component';


@Component({
  selector: 'app-prikazprakse',
  templateUrl: './prikazprakse.component.html',
  styleUrls: ['./prikazprakse.component.scss']
})
export class PrikazprakseComponent implements OnInit {

  @Input()
  praksa!: Praksa;

  @Output()
  showChild = new EventEmitter<boolean>();

  viesChild: boolean = false;

  constructor(
    private router: Router, private authService: AuthService, private prakseServie: PrakseService,) {
  }

  ngOnInit(): void { }

  showDetails() {
    console.log(this.authService.userData.role + "/internships/" + this.praksa.internshipId + "/details");
    this.router.navigate([this.authService.userData.role + "/internships/" + this.praksa.internshipId + "/details"]);
  }



}

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Company } from 'src/app/tipovi/company';
import { Mentor } from 'src/app/tipovi/mentor';
import { Praksa } from 'src/app/tipovi/Praksa';
import { AuthService } from 'src/app/_servisi/auth.service';
import { DetaljanPregledPrakseComponent } from '../detaljan-pregled-prakse/detaljan-pregled-prakse.component';


@Component({
  selector: 'app-prikazprakse',
  templateUrl: './prikazprakse.component.html',
  styleUrls: ['./prikazprakse.component.scss']
})
export class PrikazprakseComponent implements OnInit {

  @Input()
  praksa!: Praksa;
  constructor(private dialog: MatDialog,
    private router:Router, private authService:AuthService) {

  }

  ngOnInit():void {}

  showPopUp() {
    console.log(this.authService.userData.role+"/"+this.praksa.internshipId+"/details");
    this.router.navigate([this.authService.userData.role+"/"+this.praksa.internshipId+"/details"]);
    this.dialog.open(DetaljanPregledPrakseComponent, {
      data: {
        data: this.praksa
      }
    });
    
  }

}

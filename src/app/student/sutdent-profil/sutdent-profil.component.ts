import { ArrayType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from 'src/app/_servisi/student.service';

@Component({
  selector: 'app-sutdent-profil',
  templateUrl: './sutdent-profil.component.html',
  styleUrls: ['./sutdent-profil.component.scss']
})
export class SutdentProfilComponent implements OnInit {


test:Array<any> = [{period: String, firma: String}];

  student = {
    indeks: String,
    ime: String,
    prezime: String,
    datumRodjenja: String,
    mail: String,
    adresa: String,
    portfolioLink: String,
    tel: String,
    oMeni: String,
    fakultet: String,
    smjer: String,
    godina:Number,
    ciklus: String,
    vjestine:[{item: String}],
    jezici: [{item: String}],
    hobiji: [{item: String}],
    radnoIskustvo:[{period: String, firma: String, pozicija: String, opis: String}],
    projekti:[{period: String, naziv: String, opis: String, link: String}]
  }

  constructor(private profileData:StudentService) { }

  ngOnInit(): void {
    this.profileData.getProfileData().subscribe((result:any)=>{
      this.student = result;
    })
  }

  

}

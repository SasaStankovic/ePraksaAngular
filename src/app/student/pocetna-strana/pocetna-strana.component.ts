import { Component, OnInit } from '@angular/core';
import { PrakseService } from '../../_servisi/prakse.service';

@Component({
  selector: 'app-pocetna-strana',
  templateUrl: './pocetna-strana.component.html',
  styleUrls: ['./pocetna-strana.component.scss']
})
export class PocetnaStranaComponent implements OnInit {

  constructor(private prakse: PrakseService) { }
  
  prakseList=[];

  ngOnInit(): void {
    this.prakse.getPrakse().subscribe((result:any)=>{
      this.prakseList = result;
      console.log(this.prakseList);
    })
  }
}

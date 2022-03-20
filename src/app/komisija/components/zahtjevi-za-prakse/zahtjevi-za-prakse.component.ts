import { Component, OnInit } from '@angular/core';
import { PrakseService } from 'src/app/_servisi/prakse.service';

@Component({
  selector: 'app-zahtjevi-za-prakse',
  templateUrl: './zahtjevi-za-prakse.component.html',
  styleUrls: ['./zahtjevi-za-prakse.component.scss']
})
export class ZahtjeviZaPrakseComponent implements OnInit {

  prakseList=[];

  constructor(private prakseService: PrakseService) { 
   
  }

  ngOnInit(): void {
    this.prakseService.getZahtjeviZaPrakse().subscribe((response:any)=>{
      this.prakseList = response;
      console.log("zahtjevi za objavu>>",response);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_servisi/auth.service';
import { PrakseService } from '../../_servisi/prakse.service';

@Component({
  selector: 'app-pocetna-strana',
  templateUrl: './pocetna-strana.component.html',
  styleUrls: ['./pocetna-strana.component.scss']
})
export class PocetnaStranaComponent implements OnInit {

  showChild = false;

  constructor(private prakse: PrakseService,private auth:AuthService) { }
  
  prakseList=[];

  ngOnInit(): void {
    // if(this.auth.isStudent())
    this.prakse.getPrakse().subscribe((result:any)=>{
      this.prakseList = result;
      console.log(this.prakseList);
      this.showChild = false;
    })
  }

  hideParent()
  {
    this.showChild = true;
  }
}

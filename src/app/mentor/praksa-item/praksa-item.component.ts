import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Praksa } from 'src/app/tipovi/Praksa';
import { AuthService } from 'src/app/_servisi/auth.service';
import { PrakseService } from 'src/app/_servisi/prakse.service';

@Component({
  selector: 'app-praksa-item',
  templateUrl: './praksa-item.component.html',
  styleUrls: ['./praksa-item.component.scss']
})
export class PraksaItemComponent implements OnInit {

  internships!: Praksa[];
  
  
  constructor(private authService:AuthService,
    private prakseService:PrakseService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    let unsub = this.prakseService.getInternshipByMentorId(this.authService.userData.id).subscribe(
      {
        next:data=>{
          this.internships = data;
          unsub.unsubscribe();
        },
        error:err=>{console.log(err);}
      }
    );
  }

  viewDetails(id:number){
    this.router.navigate([this.authService.userData.role+"/"+id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { InternshipType } from 'src/app/tipovi/internship-type';
import { InternshipStatus } from 'src/app/tipovi/internshipStatus';
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
  

  internshipStatus = new FormControl(InternshipStatus.Active);


  internshipStatuses = InternshipStatus;
  
  constructor(private authService:AuthService,
    private prakseService:PrakseService,
    private router:Router,
    private fb:FormBuilder,
    ) { }

  ngOnInit(): void {
    this.getInternship();
  }

  getInternship(){
    let unsub = this.prakseService.getInternshipByMentorId(this.authService.userData.id,this.internshipStatus.value).subscribe(
      {
        next:data=>{
          this.internships = data;
          console.log(data)
          unsub.unsubscribe();
        },
        error:err=>{console.log(err);}
      }
    );
  }

  viewDetails(id:number){
    this.router.navigate([this.authService.userData.role+"/internships/"+id+'/details']);
  }

}

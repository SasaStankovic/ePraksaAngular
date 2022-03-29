import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscribable } from 'rxjs';
import { Application } from 'src/app/tipovi/application';
import { ApplicationsService } from 'src/app/_servisi/applications.service';
import { AuthService } from 'src/app/_servisi/auth.service';

@Component({
  selector: 'app-my-applicaitons',
  templateUrl: './my-applicaitons.component.html',
  styleUrls: ['./my-applicaitons.component.scss']
})
export class MyApplicaitonsComponent implements OnInit {

 applications$!: Subscribable<Application[]>;
  constructor(private authService:AuthService, private appService:ApplicationsService) { }

  ngOnInit(): void {
    this.applications$ = this.appService.getApplicationsByStudentId(this.authService.userData.id);
    this.appService.getApplicationsByStudentId(this.authService.userData.id).subscribe(res=>{
      console.log(res)
    })
  }
  viewInternship(internshipId:number){
    
  }

  cancelApplicaiton(internshipId:number){
    
  }
}

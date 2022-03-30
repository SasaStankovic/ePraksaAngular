import { Component, OnInit } from '@angular/core';
import { Subscribable } from 'rxjs';
import { Mentor } from 'src/app/tipovi/mentor';
import { AuthService } from 'src/app/_servisi/auth.service';
import { FirmaService } from 'src/app/_servisi/firma.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {

  mentors$!:Subscribable<Mentor[]>;

  constructor(companyService:FirmaService, authService:AuthService) { 
   this.mentors$ = companyService.getMentors(authService.userData.id);
  }
  

  ngOnInit(): void {

  }

}

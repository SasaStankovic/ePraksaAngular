import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscribable } from 'rxjs';
import { Praksa } from 'src/app/tipovi/Praksa';
import { AuthService } from 'src/app/_servisi/auth.service';
import { PrakseService } from 'src/app/_servisi/prakse.service';

@Component({
  selector: 'app-internship-view',
  templateUrl: './internship-view.component.html',
  styleUrls: ['./internship-view.component.scss']
})
export class InternshipViewComponent implements OnInit {

  title = "";
  internships$!: Subscribable<Praksa[]>;

  constructor(private prakseService: PrakseService, private authService: AuthService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (param['type'] == 'published')
      {
        this.internships$ = this.prakseService.getInternsipByIdAndStatus(this.authService.userData.id, true);
        this.title = "Objavljene prakse"
      }
      else if (param['type'] == 'denied')
      {
        this.internships$ = this.prakseService.getInternshipByIdAndAccepted(this.authService.userData.id, false);
        this.title = "Odbijene stručne prakse"
      }

    })
  }

}

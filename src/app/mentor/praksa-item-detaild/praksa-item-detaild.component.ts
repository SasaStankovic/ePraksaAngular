import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { SutdentProfilComponent } from 'src/app/student/sutdent-profil/sutdent-profil.component';
import { Praksa } from 'src/app/tipovi/Praksa';
import { Student } from 'src/app/tipovi/Student';
import { AuthService } from 'src/app/_servisi/auth.service';
import { PrakseService } from 'src/app/_servisi/prakse.service';

@Component({
  selector: 'app-praksa-item-detaild',
  templateUrl: './praksa-item-detaild.component.html',
  styleUrls: ['./praksa-item-detaild.component.scss']
})
export class PraksaItemDetaildComponent implements OnInit {

  internship!: Praksa;
  students:any;
  id = -1;

  constructor(public route: ActivatedRoute,
    public praksaService: PrakseService,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.praksaService.getInternshipById(this.id).subscribe(
      {
        next: data => {
          this.internship = data[0];
          console.log(data);
          this.praksaService.getStudentsOnInternship(this.id).subscribe(
            {
              next:res=>{
                console.log("studenti na praksi>>",res);
                this.students = res;
              } 
            });
        },
        error: err => console.log(err),
      },
    );
  }


}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
    public praksaService: PrakseService,
    public router:Router,public snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.praksaService.getInternshipById(this.id).subscribe(
      {
        next: data => {
          console.log("Praksa>>",data);
          this.internship = data;
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

  viewStudent(studentId:number){
    this.router.navigate(['mentor/students/'+studentId]);
  }
  viewReport(studentId:number){
    this.router.navigate(['mentor/report/'+studentId]);
  }

  startInternship(){
    this.praksaService.startInternship(this.internship.internshipId).subscribe({
      next: res=>{
        this.snackBar.open("Uspješno ste započeli praksu!","Ok");
      },
      error: err=>console.log("GERSKA>>",err),
    });
  }

  closeInternship(){
    this.praksaService.closeInternship(this.internship.internshipId).subscribe({
      next: res=>{this.snackBar.open("Uspješno ste završili praksu!","Ok"); this.router.navigate(['/mentor'])},
      error: err=>{console.log("gerska>>",err)},
    });
  }

}

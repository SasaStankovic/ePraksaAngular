import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Unsubscribable } from 'rxjs';
import { Praksa } from 'src/app/tipovi/Praksa';
import { AuthService } from 'src/app/_servisi/auth.service';
import { PrakseService } from 'src/app/_servisi/prakse.service';

@Component({
  selector: 'app-detaljan-pregled-prakse',
  templateUrl: './detaljan-pregled-prakse.component.html',
  styleUrls: ['./detaljan-pregled-prakse.component.scss']
})
export class DetaljanPregledPrakseComponent implements OnInit, OnDestroy {

  isStudent!: boolean;
  isCompany!: boolean;
  isCommission!: boolean;

  praksa!: Praksa;
  unsub!: Unsubscribable;

  constructor(
    private prakseServis: PrakseService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private prakseService: PrakseService,) {



    prakseService.currentInternshipStatus.subscribe(res => {
      this.praksa = res;
      console.log("AAAAAAAAAAAA", this.praksa)
    }
    )
  }

  ngOnInit() {

    this.isStudent = this.authService.isStudent();
    this.isCommission = this.authService.isCommision();
    this.isCompany = this.authService.isCompany();

    let unsub1 = this.route.params.subscribe({
      next: res => {
        let unsub2 = this.prakseService.getInternshipById(res['id']).subscribe({
          next: data => {
            this.praksa = Object.assign(data);
            unsub2.unsubscribe();
            unsub1.unsubscribe();
          },
          error: err => console.log(err),

        });
      },
      error: err => console.log("GERSKA>>", err),
    })
  }

  closePopUp() {
    this.router.navigate([this.authService.userData.role])
  }

  approveInternship() {
    this.prakseServis.accetpInternship(this.praksa.internshipId).subscribe({
      next: data => {
        this.snackBar.open("Uspjesno ste objavili praksu", "Ok");

        this.router.navigate([this.authService.userData.role]);
        this.router.navigate(['student/internships'], { replaceUrl: true });
        // window.location.reload();
      },
      error: err => console.log(err)
    });
  }


  apliciraj() {
    if (this.praksa.requiredLetter)
      this.router.navigate([this.authService.userData.role + '/internships/' + this.praksa.internshipId + '/' + 'application']);
    else {
      let submitData = {
        internshipId: this.praksa.internshipId,
        motivationalLetter: "",
        studentId: this.authService.userData.id,
      }
      this.prakseService.submitApplication(submitData).subscribe({
        next: res => { console.log("Uspjesno", submitData); this.snackBar.open("Uspjesno ste poslali prijavu za praksu!", "Ok"); this.router.navigate(['/student/internships']); },
        error: err => console.log(err),
      });
    }
  }

  cancel() {
    this.router.navigate(['student/internships'], { replaceUrl: true });
  }

  redirectToEdit(id:number){
    this.router.navigate(['company','internships',id,'edit']);
  }

  denideInternship(){
    this.prakseService.accetpInternship(this.praksa.internshipId,false).subscribe({
      next: ()=>{this.snackBar.open("Praksa je odbijena", "Ok"); this.router.navigate(['/student/internships']);},
      error:err=>{this.snackBar.open("Doslo je do greske", "Ok"); console.log(err); this.router.navigate(['/student/internships']);}
    })
  }

  ngOnDestroy(): void {
    // this.unsub?.unsubscribe();
  }

}
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Praksa } from 'src/app/tipovi/Praksa';
import { AuthService } from 'src/app/_servisi/auth.service';
import { PrakseService } from 'src/app/_servisi/prakse.service';

@Component({
  selector: 'app-detaljan-pregled-prakse',
  templateUrl: './detaljan-pregled-prakse.component.html',
  styleUrls: ['./detaljan-pregled-prakse.component.scss']
})
export class DetaljanPregledPrakseComponent implements OnInit {

  isStudent = false;
  praksa!: Praksa;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
   private dialog: MatDialog,
   private prakseServis:PrakseService,
   private route:ActivatedRoute,
   private router:Router,
   private authService:AuthService,
   private snackBar:MatSnackBar,
   private prakseService:PrakseService) {
    this.praksa = data.data;
  }

  ngOnInit() {
    let item = localStorage.getItem('user');
    if (item !== null)
      this.isStudent = (this.authService.userData.role == "student" ? true : false);
  }

  closePopUp() {
    this.dialog.closeAll();
    this.router.navigate([this.authService.userData.role])
  }

  approveInternship(){
      this.prakseServis.accetpInternship(this.data.data.internshipId).subscribe({
        next: data=>{
          this.snackBar.open("Uspjesno ste objavili praksu","Ok");
          this.dialog.closeAll();
          this.router.navigate([this.authService.userData.role]);
          window.location.reload();
        },
        error: err=> console.log(err)
      });
  }


  apliciraj(){
    this.dialog.closeAll();
    if(this.praksa.requiredLetter)
      this.router.navigate([this.authService.userData.role+'/internships/'+this.data.data.internshipId+'/'+'application']);
    else{
      let submitData = {
        internshipId:this.praksa.internshipId,
        motivationalLetter:"",
        studentId:this.authService.userData.id,
      }
      this.prakseService.submitApplication(submitData).subscribe({
        next: res => { console.log("Uspjesno", submitData); this.snackBar.open("Uspjesno ste poslali prijavu za praksu!","Ok"); this.router.navigate(['/student/internships']); },
        error: err => console.log(err),
      });
    }
  }

  cancel() {
    this.router.navigate(['student/internships']);
  }

}
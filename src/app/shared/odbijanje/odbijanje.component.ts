import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApplicationsService } from 'src/app/_servisi/applications.service';
import { FirmaService } from 'src/app/_servisi/firma.service';

@Component({
  selector: 'app-odbijanje',
  templateUrl: './odbijanje.component.html',
  styleUrls: ['./odbijanje.component.scss']
})
export class OdbijanjeComponent implements OnInit {
  forma!: FormGroup;
  applicationData!: any;


  constructor(private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private firmaService: FirmaService,
    private appService: ApplicationsService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.applicationData = data;
  }

  ngOnInit(): void {
    this.forma = this.formBuilder.group({
      comment: [null, Validators.required]
    });
  }
  odbijPraksu() {
    if (!this.forma.valid)
      return;
    this.appService.putApplication(this.applicationData.internshipId, this.applicationData.studentId, "denied", this.forma.value).subscribe(
      {
        next: res => { this.snackBar.open("Prijava na praksu je odbijena", "Ok"); this.dialog.closeAll(); window.location.reload(); },
        error: err => console.log(err)
      }
    );
  }

  closePopUp() {
    this.dialog.closeAll();
  }

}

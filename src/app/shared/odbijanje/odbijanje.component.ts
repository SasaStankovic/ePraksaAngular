import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FirmaService } from 'src/app/_servisi/firma.service';

@Component({
  selector: 'app-odbijanje',
  templateUrl: './odbijanje.component.html',
  styleUrls: ['./odbijanje.component.scss']
})
export class OdbijanjeComponent implements OnInit {
forma!: FormGroup;

showErrMsg=false;

  constructor(private formBuilder:FormBuilder,
              private dialog:MatDialog,
              private firmaService: FirmaService) { 
  }

  ngOnInit(): void {
    this.forma = this.formBuilder.group({
      razlog:[null,Validators.required]
    });
  }
  odbijPraksu(){
    if(this.forma.invalid)
      return;

    let razlog={razlog:""};

    razlog.razlog = this.forma.value['razlog'];
    this.firmaService.sendRazlogOdbijanja(razlog).subscribe({
      complete: ()=>{this.dialog.closeAll();console.log("Razlog odbijanja:"+razlog)},
      next:(data)=>console.log(data),
      error:(err)=>console.log(err)
    });
    
  }

  closePopUp(){
    this.dialog.closeAll();
  }

}

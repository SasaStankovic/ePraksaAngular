import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Praksa } from 'src/app/tipovi/Praksa';
import { AuthService } from 'src/app/_servisi/auth.service';
import { PrakseService } from 'src/app/_servisi/prakse.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

form!:FormGroup;
internship!:Praksa;

  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute, private prakseService:PrakseService,
    private authService:AuthService) { 
    this.form = this.formBuilder.group({
      letter:[null,Validators.required],
      studentId:[ authService.userData.id as number ],
      internshipId:[null],
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      this.prakseService.getInternshipById(res['id']).subscribe(data=>{
        console.log(data);
        this.internship = data[0];
        this.form.controls['internshipId'].setValue(data[0].internshipId);
      })
    })
  }

  submitData(){
    console.log("SUBMIT DATA>>",this.form.value);
  }

}

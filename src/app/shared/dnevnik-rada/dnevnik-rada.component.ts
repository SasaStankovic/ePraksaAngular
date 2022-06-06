import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/_servisi/auth.service';
import { WorkDioryService } from 'src/app/_servisi/work-diory.service';

@Component({
  selector: 'app-dnevnik-rada',
  templateUrl: './dnevnik-rada.component.html',
  styleUrls: ['./dnevnik-rada.component.scss']
})
export class DnevnikRadaComponent implements OnInit {

  form!: FormGroup;
  workDiaryId!:number;

  workedHours!:number;

  constructor(private formBuilder: FormBuilder,
    public workDiaryService:WorkDioryService,
    public auth:AuthService,
    public snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'dnevnikRada': new FormArray([
        this.formBuilder.group({
          entryId:[null],
          day:[null,Validators.required],
          fromTime:[null,Validators.required],
          toTime:[null,Validators.required],
          text:[null,Validators.required],
          workDiaryId:[null],
          lastModifiedDate:[null],
          createdAt:[null],
          edit:[true],
          save:[false],
        })
      ])
    });

    this.workDiaryService.getWorkDiaryByStudentId(this.auth.userData.id).subscribe({
      next: (res:any)=> {
        this.workedHours = res[0].workedHours;
        this.workDiaryId = res[0].workDiaryId;
        res[0].workDairyEntries.forEach((e:any,i:number) => {
          this.addNewReport(e);
          this.getEntryForm(i+1).disable();
        });
      },
      error: err=> console.log(err),
    });

  }

  get dnevnikRada() {
    return this.form.controls['dnevnikRada'] as FormArray;
  }

  addNewReport(data:any=null) {
    const input = this.formBuilder.group({
      entryId:[data?.entryId],
      day:[data?.day,Validators.required],
      fromTime:[data?.fromTime,Validators.required],
      toTime:[data?.toTime,Validators.required],
      text:[data?.text,Validators.required],
      lastModifiedDate:[data?.lastModifiedDate],
      createdAt:[data?.createdAt],
      edit:[false],
      save:[true],
    });
    this.dnevnikRada.push(input);
  }

  delete(index: number) {
    this.dnevnikRada.removeAt(index);
  }

  getEntryForm(i:number):FormGroup{
    return this.dnevnikRada.controls[i] as FormGroup;
  }


  setEditable(index: number, value: boolean) {
    this.getEntryForm(index).controls['edit'].setValue(value);
    this.getEntryForm(index).controls['save'].setValue(!value);
    value ? this.getEntryForm(index).enable() : this.getEntryForm(index).disable();
    
  }

  submitWorkDiaryId(index:number){

    if(!this.getEntryForm(index).value.text ||!this.getEntryForm(index).value.day ||
    !this.getEntryForm(index).value.fromTime || !this.getEntryForm(index).value.toTime)
      return;

    if(!this.getEntryForm(index).value.entryId)
    {
      this.getEntryForm(index).controls['workDiaryId'].setValue(this.workDiaryId);
      this.workDiaryService.submitInput(this.getEntryForm(index).value).subscribe({
        next:res=>{ let k = this.snackBar.open("Uspješno ste sačuvali izvještaj!","Ok").onAction().subscribe(()=>{
          location.reload();
          k.unsubscribe();
        });},
        error:err=>this.snackBar.open(err.error,"ok")
      });
    }
    else{
      if(!this.getEntryForm(index).dirty) 
        return;
      let tmp = this.getEntryForm(index).value;
      this.workDiaryService.editWorkDiaryEntry(tmp,this.workDiaryId,tmp.entryId).subscribe({
        next:()=>{let k = this.snackBar.open("Izmjena je sačuvana","Ok").onAction().subscribe(res=>{
          location.reload();
          k.unsubscribe();
        });},
        error: err=>this.snackBar.open(err.error,"ok"),
      })
    }
  }

  print(i:number){
    console.log(this.getEntryForm(i).value);
  }


  
}

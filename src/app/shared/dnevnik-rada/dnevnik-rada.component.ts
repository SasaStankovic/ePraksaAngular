import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dnevnik-rada',
  templateUrl: './dnevnik-rada.component.html',
  styleUrls: ['./dnevnik-rada.component.scss']
})
export class DnevnikRadaComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'dnevnikRada': new FormArray([
        this.formBuilder.group({
          'dan': new FormControl({ value: '', disabled: false }, [Validators.required]),
          'od': new FormControl({ value: '', disabled: false }, Validators.required),
          'do': new FormControl({ value: '', disabled: false }, Validators.required),
          'izvjestaj': new FormControl({ value: '', disabled: false }, Validators.required),
          'edit': [true],
          'save': [false],
        })
      ])
    });
  }

  get dnevnikRada() {
    return this.form.controls['dnevnikRada'] as FormArray;
  }

  addNewReport() {
    const input = this.formBuilder.group({
      dan: [null, Validators.required],
      od: [null, Validators.required],
      do: [null, Validators.required],
      izvjestaj: [null, Validators.required],
      edit: [true],
      save: [false],
    });
    this.dnevnikRada.push(input);
  }

  delete(index: number) {
    this.dnevnikRada.removeAt(index);
  }

  save(index: number) {
    // if(this.dnevnikRada.controls[index].valid)
    {
      console.log("index:" + index);
      console.log("DNEVNIK RADA.CONTROLS", (this.dnevnikRada.controls[index] as FormGroup).controls);
      this.setEdit(index, false);
      // console.log("Sacuvano"+this.disabled);
    }
  }
  uredi(index: number) {
    // this.disabled = !this.disabled;
  }

  setEdit(index: number, value: boolean) {
    (this.dnevnikRada.controls[index] as FormGroup).controls['edit'].setValue(value);
    //['edit'].setValue(value)
  }

  setSave(value: boolean) {
    this.form.controls['save'].setValue(value);
  }


  forma: FormGroup = this.formBuilder.group({
    name: ['bojan'],
    age: [22]
  });

  f() {
    this.forma.controls['name'].valueChanges.subscribe({
      next: val => {
        if (val !== 'hide') 
          return;
        this.forma.controls['age'].reset();
        this.forma.controls['age'].updateValueAndValidity();
      },
      error: err => console.log(err),
    })
  }

  print() {
    console.log(this.forma.value);
  }
}

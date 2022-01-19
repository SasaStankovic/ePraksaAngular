import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dnevnik-rada',
  templateUrl: './dnevnik-rada.component.html',
  styleUrls: ['./dnevnik-rada.component.scss']
})
export class DnevnikRadaComponent implements OnInit {

  form!: FormGroup;
  disabled = !true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'dnevnikRada': new FormArray([
        this.formBuilder.group({
          'dan': new FormControl({value: '',disabled:this.disabled}, [Validators.required]),
          'od': new FormControl({value: '',disabled:this.disabled}, Validators.required),
          'do': new FormControl({value: '',disabled:this.disabled}, Validators.required),
          'izvjestaj': new FormControl({value: '',disabled:this.disabled},Validators.required)
        })
      ])
    });
  }

  get dnevnikRada() {
    return this.form.controls['dnevnikRada'] as FormArray;
  }

  addNewReport() {
    const input = this.formBuilder.group({
      dan: '',
      od: '',
      do: '',
      izvjestaj:''
    });
    this.dnevnikRada.push(input);
  }

  delete(index: number) {
    this.dnevnikRada.removeAt(index);
  }

  save(){
    if(this.dnevnikRada.valid)
    {
      this.disabled = true;
      console.log("Sacuvano"+this.disabled);
    }
  }
  uredi(){
    this.disabled = !this.disabled;
  }
}

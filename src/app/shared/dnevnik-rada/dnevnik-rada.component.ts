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
          'dan': new FormControl({value: '',disabled:false}, [Validators.required]),
          'od': new FormControl({value: '',disabled:false}, Validators.required),
          'do': new FormControl({value: '',disabled:false}, Validators.required),
          'izvjestaj': new FormControl({value: '',disabled:false},Validators.required)
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
      izvjestaj:'',
      disabled: true
    });
    this.dnevnikRada.push(input);
  }

  delete(index: number) {
    this.dnevnikRada.removeAt(index);
  }

  save(index: number){
    // if(this.dnevnikRada.controls[index].valid)
    {
      console.log("index:"+index);
      console.log(this.dnevnikRada.controls[index].get('disabled'));
      // console.log("Sacuvano"+this.disabled);
    }
  }
  uredi(index:number){
    // this.disabled = !this.disabled;
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregled-studenta',
  templateUrl: './pregled-studenta.component.html',
  styleUrls: ['./pregled-studenta.component.scss']
})
export class PregledStudentaComponent implements OnInit {

  @Input()
  student={
    ime:String,
    prezime:String
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}

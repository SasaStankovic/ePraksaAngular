import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-praksa-item',
  templateUrl: './praksa-item.component.html',
  styleUrls: ['./praksa-item.component.scss']
})
export class PraksaItemComponent implements OnInit {

  list = ['1','2'];
  constructor() { }

  ngOnInit(): void {
  }

}

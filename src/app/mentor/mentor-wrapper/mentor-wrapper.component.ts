import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-wrapper',
  templateUrl: './mentor-wrapper.component.html',
  styleUrls: ['./mentor-wrapper.component.scss']
})
export class MentorWrapperComponent implements OnInit {

  buttons = [{ name: "Pregled studenata", navigate: "/mentor/internships" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

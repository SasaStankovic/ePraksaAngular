import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private dialog:MatDialog) {}

  ngOnInit(): void {
  }

  showPopUp(rola: string){
    this.dialog.open(LoginFormComponent,{
      data: rola
    });
  }
  count=0;
  sorti(){
    this.count++;
    if(this.count == 3)
    {

      let array = ['🥚','🐤'];
      window.alert("sta je prvo nastalo?"+array+" Prvo je nastalo"+array.sort());
    }
  }
}

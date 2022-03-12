import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { AuthService } from '../_servisi/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  subscription!: Subscription;
  hide = true;
  rola = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
    private dialog: MatDialog,
    private httpLogIn: HttpClient,
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.rola = data;
  }

  form!: FormGroup;

  login() {
      this.auth.login(this.form.value);
      this.dialog.closeAll();
  }

  ngOnInit(): void {
    //Forma se moze kreirati ovako:
    this.form = this.formBuilder.group({
      'email': new FormControl('', [Validators.email]),
      'password': new FormControl('', [Validators.required]),
    })
  }
  ngOnDestroy(): void {
  }
}

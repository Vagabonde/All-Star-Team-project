import {Component, Input, OnInit} from '@angular/core';
import { FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {
  logAsAdmin = 'Sign in as curator';
  logAsStudent = 'Sign in as Student';
  loginFormModalEmail = new FormControl('', Validators.email);
  loginFormModalPassword = new FormControl('', Validators.required);

  constructor() {
  }

  ngOnInit() {
  }

}

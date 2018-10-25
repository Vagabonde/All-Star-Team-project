import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';


@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
logout() {
    this.authService.signOut();
  }
}

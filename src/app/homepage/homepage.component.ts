import {Component, Input, OnInit} from '@angular/core';
import {ModalLoginComponent} from '../modal-login/modal-login.component';
import {Router, RouterModule, Routes} from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  title = 'La La Lab';
  subTitle = 'So simple that you want to sing';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}

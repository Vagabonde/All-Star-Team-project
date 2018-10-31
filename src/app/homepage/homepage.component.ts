import {Component, Input, OnInit} from '@angular/core';
import {ModalLoginComponent} from '../modal-login/modal-login.component';
import {Router, RouterModule, Routes} from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  title = 'EPAM LAB';
  subTitle = 'Start sharing your knowledge';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor(/*private route: ActivatedRoute*/) {
   // this.route.params.subscribe(params => console.log(params));
  }

  sideNavEnabled:boolean = true;

  toggleSideNavState() {
    this.sideNavEnabled = !this.sideNavEnabled;
  }

  ngOnInit() {
  }

  getSideNavState() {
    return {
      'side-nav': this.sideNavEnabled
    };
  }
}

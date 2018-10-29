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

  side_nav_enabled = true;

  toggle_side_nav_state() {
    this.side_nav_enabled = !this.side_nav_enabled;
  }

  ngOnInit() {
  }

  get_side_nav_state() {
    return {
      'side-nav': this.side_nav_enabled
    };
  }
}
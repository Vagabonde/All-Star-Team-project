import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { GROUPS } from '../mock-groups';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  groups = GROUPS;

  constructor() {

  }

  ngOnInit() {
  }
}

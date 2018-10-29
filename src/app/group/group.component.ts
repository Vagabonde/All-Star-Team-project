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

  constructor(private route: ActivatedRoute) {

   this.route.params.subscribe(params => {
     let group = this.groups.find((el) => {
       return params.groupId == el.id;
     });
   });
  }

  ngOnInit() {
  }
}

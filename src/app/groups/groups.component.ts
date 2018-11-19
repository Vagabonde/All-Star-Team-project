import { Component, OnInit } from '@angular/core';
import { GROUPS } from '@shared/mocks/mock-groups';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
    groups = GROUPS;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { GROUPS } from '../mock-groups';
//import { ModalAddGroupComponent } from './modal-add-group/modal-add-group.component';

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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GROUPS } from '@shared/mocks/mock-groups';
import { UserService } from '@service/user.service';
import { User } from '@interface/user';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  groups = GROUPS;
  selected:any;

  curator: User;
  students: User[];
  potentialStudents: User[];
  currentGroupId: string;
  // currentStudent: User;
  // currentStudentId: string = '3495';
  currentUser: User;
  currentUserId: string = '1993036'; //curator Id
  // currentUserId: string = '128736'; //student id;

  addUsersModeActive: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentGroupId = this.route.snapshot.paramMap.get('groupId');


    this.userService.getCuratorByGroupId(this.currentGroupId)
    .subscribe(curator => this.curator = curator);

    this.userService.getStudents()
    .subscribe(allStudents => this.potentialStudents = allStudents.filter(user => !user.groupId || user.groupId === this.currentGroupId));


    this.updateUsers();


    this.userService.getUserById(this.currentUserId)
    .subscribe(user => this.currentUser = user);
  }

  toggleUser(user) {
    if (user.groupId === '') {
      this.userService.setStudentGroup(user, this.currentGroupId);

      // for(let i = 0; i < this.students.length; i++) {
      //   if(this.students[i].id === user.id) {
      //     this.students[i].groupId = this.currentGroupId;
      //   }
      // }

    } else {
      this.userService.setStudentGroup(user, '');

      // for(let i = 0; i < this.students.length; i++) {
      //   if(this.students[i].id === user.id) {
      //     this.students[i].groupId = '';
      //   }
      // }
    }

    // let s = this.students;
    // this.students = s;

    // this.students.push(user);
    // this.students.pop();

    this.updateUsers();
  }

  addUsers(): void {
    this.addUsersModeActive = true;
  }

  showUsers(): void {
    this.addUsersModeActive = false;
  }

  updateUsers(): void {
    this.userService.getStudentsByGroupId(this.currentGroupId)
    .subscribe(students => this.students = students);
  }



  select(item) {
    if(this.selected === item) {
    this.selected = '';
    } else {
      this.selected = item;
    }
};

  isActive(item) {
    if(this.selected === item) {
      return 'showed'
    } else {
      return 'hiden'
    }
  }
  isActiveDots(item) {
    if(this.selected === item) {
      return 'active'
    }
  }

}

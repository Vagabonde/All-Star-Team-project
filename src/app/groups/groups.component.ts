import { Component, OnInit } from '@angular/core';
import { GROUPS } from '@shared/mocks/mock-groups';
import { User } from '@interface/user';
import { UserService } from '@app/shared/services/user.service';
import { AuthService } from '@service/auth.service';



@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
    groups = GROUPS;
    currentUser: User;
    // currentUserId: string = '78vUGlS2S7RywUuqfBw0zPQKxLv2';// admin
    // currentUserId: string = 'bzl50eV21WZoNKsCyUWU6F6sJIO2'//sud2 without gruop
    currentUserId: string = 'xShY1vEeaoRCYNzeBoLw8Ha5yQt2'

  constructor(public userService: UserService, private authService: AuthService) {
    // this.currentUserId = this.getCurrentUser();

  }

  getCurrentUser() {
       return this.authService.currentUserId
    }


  ngOnInit() {
    this.userService.getUserById(this.currentUserId)
    .subscribe(user => this.currentUser = user);
  }
}

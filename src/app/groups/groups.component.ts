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
    currentUserId: string;

  constructor(public userService: UserService, private authService: AuthService) {
    this.currentUserId = this.getCurrentUser();

  }

  getCurrentUser() {
       return this.authService.currentUserId;
    }


  ngOnInit() {
    this.userService.getUserById(this.currentUserId)
    .subscribe(user => this.currentUser = user);
  }
}

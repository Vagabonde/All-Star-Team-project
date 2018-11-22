import {Component, OnInit} from '@angular/core';
import {AuthService} from "@service/auth.service";
import {User} from "@interface/user";
import {UserService} from "@service/user.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    currentUser: User;
    currentUserId: string;

    constructor(public userService: UserService, private authService: AuthService) {
    }

    getCurrentUser() {
       return this.authService.currentUserId;
    }

    ngOnInit() {
        this.userService.getUserById(this.currentUserId).subscribe(user => this.currentUser = user);
    }

    logOut() {
        this.authService.signOut();
    }

    isLoggedIn() {
        return this.authService.authenticated;
    }
}

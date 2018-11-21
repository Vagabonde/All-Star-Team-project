import {Component, Input} from '@angular/core';
import {AuthService} from "@service/auth.service";
import {User} from "@interface/user";
import {UserService} from "@service/user.service";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private auth: AuthService,
                private userService: UserService) {
    }

    currentUser: User;
    // currentUserId: string = '1993036'; //admin
    currentUserId: string = '128736';//student

    ngOnInit(){
        this.userService.getUserById(this.currentUserId).subscribe(user => this.currentUser = user)
    }

    logOut() {
        this.auth.signOut();
    }

    isLoggedIn() {
        return this.auth.authenticated;
    }
}

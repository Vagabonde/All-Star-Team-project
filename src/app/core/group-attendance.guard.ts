import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {UserService} from '@service/user.service';
import {AuthService} from '@service/auth.service';
import {Subscription} from "rxjs/Subscription";
import {User} from "@interface/user";

@Injectable({
    providedIn: 'root'
})
export class GroupAttendanceGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {
    }

    private currentUser: User;

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        const groupId = this.authService.currentUser.groupId;
        //this.userSubscription = this.userService.getUserById(id.toString()).subscribe((user) => this.currentUser = user);

        //console.log(this.currentUser);

        if (!groupId || this.authService.currentUser.isAdmin) {
            return true;
        } else {
            this.router.navigateByUrl(`groups/${this.currentUser.groupId}`);
        }
    }
}

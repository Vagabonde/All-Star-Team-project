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
    constructor(private userService: UserService, private authService: AuthService, private router: Router) {
    }

    private userSubscription: Subscription;
    private currentUser: User;

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        const id = this.authService.currentUser.additionalUserInfo.profile.id;
        this.userSubscription = this.userService.getUserById(id).subscribe((user) => this.currentUser = user);

        if (!this.currentUser.groupId || this.currentUser.isAdmin) {
            return true;
        } else {
            this.router.navigateByUrl(`groups/${this.currentUser.groupId}`);
        }
    }
}

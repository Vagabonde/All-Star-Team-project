import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@service/auth.service';
@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {
  logAsAdmin = 'LOG IN';

    isNewUser = true;
    email = '';
    password = '';
    errorMessage = '';
    error: {
        name: string,
        message: string
    } = {
        name: '',
        message: ''
    };

    constructor(public authService: AuthService, private router: Router) {}

    ngOnInit() {}

    checkUserInfo() {
        if (this.authService.isUserEmailLoggedIn) {
            this.router.navigate(['/'])
        }
    }

    clearErrorMessage() {
        this.errorMessage = '';
        this.error = {
            name: '',
            message: ''
        };
    }

    onLoginGithub(): void {

        // if (this.validateForm(this.email, this.password)) {
            this.authService.loginWithGitHub()
                .then(() => this.router.navigate(['/groups']))
                .catch(_error => {
                    this.error = _error
                    this.router.navigate(['/'])
                })
        // }
    }

    // validateForm(email: string, password: string): boolean {
    //     const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    //     if ((email.length === 0) || (!EMAIL_REGEXP.test(email))) {
    //         this.errorMessage = 'Invalid email format!'
    //         return false;
    //     }

    //     if (password.length === 0) {
    //         this.errorMessage = 'Please enter Password!'
    //         return false
    //     }

    //     if (password.length < 6) {
    //         this.errorMessage = 'Password should be at least 6 characters!'
    //         return false
    //     }

    //     return true
    // }
}

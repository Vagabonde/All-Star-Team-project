import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-modal-sign-up',
  templateUrl: './modal-sign-up.component.html',
  styleUrls: ['./modal-sign-up.component.scss']
})
export class ModalSignUpComponent implements OnInit {
  register = 'Register';

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

    onSignUp(): void {
        this.clearErrorMessage()

        if (this.validateForm(this.email, this.password)) {
            this.authService.signUpWithEmail(this.email, this.password)
                .then(() => {
                    this.router.navigate(['/groups'])
                }).catch(_error => {
                    this.error = _error
                    this.router.navigate(['/'])
                })
        }
    }

    validateForm(email: string, password: string): boolean {
        if (email.length === 0) {
            this.errorMessage = 'Please enter Email!'
            return false
        }

        if (password.length === 0) {
            this.errorMessage = 'Please enter Password!'
            return false
        }

        if (password.length < 6) {
            this.errorMessage = 'Password should be at least 6 characters!'
            return false
        }

        this.errorMessage = ''

        return true
    }

    isValidMailFormat(email: string) {
        const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if ((email.length === 0) && (!EMAIL_REGEXP.test(email))) {
            return false;
        }

        return true;
    }

}

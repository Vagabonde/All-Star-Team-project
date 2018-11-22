import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from '../interface/user';
import {MockService} from '@service/mock.service';


import {GROUPS} from '@shared/mocks/mock-groups';
import {LESSONS_FRONT_END} from '@shared/mocks/mock-lessons-front-end';
import {USERS} from '@shared/mocks/mock-user';

@Injectable()
export class AuthService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth, private router: Router, public mockService: MockService) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    return (this.authState !== null) && (!this.isUserAnonymousLoggedIn);
  }

    get authenticated(): boolean {
      return this.authState !== null;
    }

    get currentUserObservable(): any {
      return this.afAuth
    }

  loginWithGitHub() {
    return this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider())
    .then((result: any) => {
      let newUser: User = {
        id: (result.additionalUserInfo.profile.id).toString(),
        name: result.additionalUserInfo.profile.name,
        email: result.additionalUserInfo.profile.email,
        github_repo: result.additionalUserInfo.profile.html_url,
        avatar_src: result.additionalUserInfo.profile.avatar_url,
        groupId: 'front-end',
        isAdmin: false,
        lessons: []
      }
      USERS.unshift(newUser);
      let values: Array<object> = [{'groups': GROUPS}, {'users': USERS}, {'lessons': LESSONS_FRONT_END}];
      values.forEach((value) => this.mockService.setUpLocalStorage(value));
      this.authState = result;
    }).catch(error => {
        console.log(error)
        throw error
      });
  }

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/'])
  }
}

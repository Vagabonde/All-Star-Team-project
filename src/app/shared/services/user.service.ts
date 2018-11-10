import { Injectable } from '@angular/core';
import { User } from '../../interface/user';
import { USERS } from '../mocks/mock-user';
import { Observable, of } from 'rxjs'



@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor() { }


  getUsers(): Observable<User[]> {
    return of(USERS);
  }

//   public getStudents() {
//     let students = USERS.map(user) {
//       if (user.isAdmin == false) {
//         return user;
//       }
//     }
//   }

//   public getStudentsByIdGroup(groupId) {
//     return Group_groupId;
//   }

//   public getCuratorByGroup() {
//     return userTrueIsAdmin;
//   }

//   public getStudentById() {
//     return users.id.user
//   }
}

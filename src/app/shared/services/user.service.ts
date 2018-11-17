import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../interface/user';
import { USERS } from '../mocks/mock-user';
import { UserLesson } from '../interface/userLesson.interface'



@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor() { }


  public getUsers(): Observable<User[]> {
    return of(USERS);
  }

  public getStudents(): Observable<User[]> {
    let students = USERS.filter(user => !user.isAdmin);
    return of(students);
  }

  public getCuratorByGroupId(groupId: string): Observable<User> {
    let curator = USERS.filter(user => user.isAdmin && user.groupId === groupId)[0]; //here could be array of curators
    return of(curator);
  }

  public getStudentsByGroupId(groupId: string): Observable<User[]> {
    let students = USERS.filter(user => !user.isAdmin && user.groupId === groupId);
    return of(students);
  }

  public getStudentById(studentId: string): Observable<User> {
    let student = USERS.filter(user => !user.isAdmin && user.id === studentId)[0];
    return of(student);
  }

  public getUserById(userId: string): Observable<User> {
    let user = USERS.filter(u => u.id === userId )[0];
    return of(user)
  }

  public setStudentGroup(student: User, currentGroupId: string): void {
    for (let i = 0; i < USERS.length; i++) {
      if (USERS[i].id === student.id) {
        USERS[i].groupId = currentGroupId;
      }
    }
  }

  public addUserLesson(userId: string, lesson: UserLesson): void {

    for(let i = 0; i < USERS.length; i++) {
      if (USERS[i].id === userId) {
        USERS[i].lessons.forEach( (item, index) => {
          if (item.lessonId === lesson.lessonId) {
            USERS[i].lessons.splice(index, 1);
          }
        });
        USERS[i].lessons.push(lesson);
      }
    }

    console.log('saving');
    console.log(USERS);
  }
}

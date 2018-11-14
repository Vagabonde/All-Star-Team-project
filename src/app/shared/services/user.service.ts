import { Injectable } from '@angular/core';
import { User } from '../../interface/user';
import { USERS } from '../mocks/mock-user';
import { Observable, of } from 'rxjs';


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

  // public setUserLessons(userId: string){
  //   //Знайти юзера по юзер айді
  //   //Взяти груп айді юзера
  //     // знайти всі лесони по груп айді
  //
  // }
}

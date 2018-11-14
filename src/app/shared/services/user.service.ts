import { Injectable } from '@angular/core';
import { User } from '../../interface/user';
import { USERS } from '../mocks/mock-user';
import { Observable, of } from 'rxjs';
import { GROUPS } from '../mocks/mock-groups';
import {Lesson} from "../../interface/lesson.interface";


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

  public getStudentGroupId(studentId: string){
      let student = USERS.filter(user => !user.isAdmin && user.id === studentId)[0];
      let studentGroupId = student.groupId;
      return studentGroupId;
  }

    public getLessonsByGroupId(groupId: string): Lesson[] {
        let groupById = GROUPS.filter(lesson => lesson.id === groupId)[0];
        return groupById.lessons;
    }

}

//   public setUserLessons(userId: string){
//     //Знайти юзера по юзер айді
//       this.getStudentsByGroupId('95');
//     //Взяти груп айді юзера
//       this.getStudentsByGroupId('95');
//       // знайти всі лесони по груп айді
// }

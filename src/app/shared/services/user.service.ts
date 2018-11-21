import {Injectable} from '@angular/core';
import {User} from '@interface/user';
import {Observable, of} from 'rxjs';
import {MockService} from './mock.service';
import {UserLesson} from '@interface/userLesson.interface'
import {Homework} from '@interface/homework.interface';
import {Lesson} from '@interface/lesson.interface';

const key: string = 'users';

@Injectable({
    providedIn: 'root'
})
export class UserService {

  constructor(public mockService: MockService) {}

  users = this.mockService.storage.get(key);

  public getUsers(): Observable<User[]> {
      return of(this.users);
  }

  public getStudents(): Observable<User[]> {
      let students = this.users.filter(user => !user.isAdmin);
      return of(students);
  }

  public getCuratorByGroupId(groupId: string): Observable<User> {
      let curator = this.users.filter(user => user.isAdmin && user.groupId === groupId)[0]; //here could be array of curators
      return of(curator);
  }

  public getStudentsByGroupId(groupId: string): Observable<User[]> {
      let students = this.users.filter(user => !user.isAdmin && user.groupId === groupId);
      return of(students);
  }

  public getUserById(userId: string): Observable<User> {
    let user = this.users.filter(u => u.id === userId )[0];
    return of(user)
  }

  public setStudentGroup(student: User, currentGroupId: string): void {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === student.id) {
        this.users[i].groupId = currentGroupId;
      }
    }
  }

  public addUserLesson(userId: string, lesson: UserLesson): void {

    for(let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === userId) {
        this.users[i].lessons.forEach( (item, index) => {
          if (item.lessonId === lesson.lessonId) {
            this.users[i].lessons.splice(index, 1);
          }
        });
        this.users[i].lessons.push(lesson);
      }
    }
  }

  public addUserHomework(userId: string, newHomework: Homework, currentLessonId: string) {
    for(let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === userId) {
        for (let j = 0; j < this.users[i].lessons.length; j++) {
          if(this.users[i].lessons[j].lessonId === currentLessonId) {
            this.users[i].lessons[j].homework = newHomework;
          }
        }
      }
    }
  }
}

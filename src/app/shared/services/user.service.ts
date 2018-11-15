import {Injectable} from '@angular/core';
import {User} from '../../interface/user';
import {Observable, of} from 'rxjs';
import {MockService} from './mock.service';


const key: string = 'users';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(public mockService: MockService) {


    }

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

    public getStudentById(studentId: string): Observable<User> {
        let student = this.users.filter(user => !user.isAdmin && user.id === studentId)[0];
        return of(student);
    }
}

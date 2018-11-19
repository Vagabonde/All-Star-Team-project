import {Injectable} from '@angular/core';
import {MockService} from './mock.service';
import {Observable, of} from 'rxjs';
import {Group} from "../interface/group.interface";
import {Lesson} from "../interface/lesson.interface";

const key: string = 'groups';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor(public mockService: MockService) {
    }

    groups = this.mockService.storage.get(key);

    public getGroups():Observable<Group[]> {
        return of(this.groups);

        /*return new Promise((resolve, reject) => {
            let groups = this.mockService.storage.get(key);
            if (groups.length) {
                resolve(groups);
            } else {
                reject(new Error('Local Storage error'));
            }
        });*/
    }

    public getGroupById(id: string):Observable<Group[]> {
        return of(this.groups.find((el) => el.id === id));

        /*return this.getGroups()
            .then((data) => data.find((el) => el.id === id))
            .catch((error) => console.error(error));*/
    }

    public getClassesByGroupId(id: string):Observable<Lesson[]> {
        return of(this.groups.find((el) => el.id === id).lessons);

       /* return this.getGroupById(id)
            .then(data => data.lessons)
            .catch((error) => console.error(error));*/
    }

    public getLessonsById(groupId: string, lessonId: number):Observable<Lesson[]> {
        return of (this.groups.find((el) => el.id === groupId).lessons.find((el) => el.id === lessonId));

        /*return this.getClassesByGroupId(groupId)
            .then((data) => data.find((el) => el.id === lessonId))
            .catch((error) => console.error(error));*/
    }
}


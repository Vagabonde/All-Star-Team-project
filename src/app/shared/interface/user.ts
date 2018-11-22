import {UserLesson} from '@interface/userLesson.interface';

export class User {
    constructor() {}
    id: string;
    name: string;
    email: string;
    github_repo: string;
    avatar_src: string;
    groupId: string;
    isAdmin: boolean;
    lessons: UserLesson[];

    // submitHomework(lessonId, homeworkLink){
    //     //this.lessons.findLessonByLessonId
    //     //
    // }
}

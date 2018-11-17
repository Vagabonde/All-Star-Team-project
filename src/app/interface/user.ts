import { UserLesson } from './userLesson.interface';
import { LessonService } from "../shared/services/lesson.service";
import { LESSONS_FRONT_END } from "../shared/mocks/mock-lessons-front-end";

export class User {
    constructor() {}
    id: string;
    name: string;
    email: string;
    github_repo: string;
    groupId: string;
    isAdmin: boolean;
    lessons: UserLesson[];

    // submitHomework(lessonId: number, homeworkLink: string){
    //     // this.lessons.findLessonByLessonId
    //     // this.lessons =
    //     // знайти юзер лесона і в хомворку замінити url i string
    // }
}

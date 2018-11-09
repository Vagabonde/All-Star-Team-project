import { UserLessonInterface } from './userLesson.interface';

export class User {
    constructor() {
    }

    id: number;
    name: string;
    email: string;
    github_repo: string;
    isAdmin: boolean;
    lessons: UserLessonInterface[];
}
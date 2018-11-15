import { UserLesson } from './userLesson.interface';

export class User {
    constructor() {
    }

    id: string;
    name: string;
    email: string;
    github_repo: string;
    groupId: string;
    isAdmin: boolean;
    lessons: UserLesson[];
}

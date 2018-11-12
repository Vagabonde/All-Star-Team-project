import { Homework } from "./homework.interface";

export interface UserLesson { //change name w/o interface
    id: string;
    feedback: string;
    mark: number;
    isAttended: boolean;
    homework: Homework[];
}
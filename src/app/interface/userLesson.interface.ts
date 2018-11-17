import { Homework } from "./homework.interface";

export interface UserLesson {
    id: number;
    feedback: string;
    mark: number;
    isAttended: boolean;
    homework: Homework;
}
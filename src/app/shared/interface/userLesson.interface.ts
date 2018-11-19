import {Homework} from "@interface/homework.interface";

export interface UserLesson {
    lessonId: string;
    feedback: string;
    mark: string;
    isAttended: boolean;
    homework: Homework;
}

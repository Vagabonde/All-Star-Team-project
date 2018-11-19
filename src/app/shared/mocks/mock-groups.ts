import {Group} from "@interface/group.interface";
import {LESSONS_FRONT_END} from "./mock-lessons-front-end";

export const GROUPS: Group[] = [
    {
        id: 'front-end',
        name: 'Front-end',
        img: 'JS.png',
        lessons: LESSONS_FRONT_END
    },
    {
        id: 'angularjs',
        name: 'AngularJS',
        img: 'angular.png',
        lessons: LESSONS_FRONT_END
    },
];

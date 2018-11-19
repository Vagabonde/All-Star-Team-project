import {Lesson} from '@interface/lesson.interface';

export interface Group {
    id: string;
    name: string;
    img: string;
    lessons: Lesson[];
}

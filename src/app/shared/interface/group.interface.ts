import { Lesson } from './lesson.interface';

export interface Group {
    id: string;
    name: string;
    img: string;
    lessons: Lesson[];
}
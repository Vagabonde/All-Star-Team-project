import { Lesson } from './lesson.interface';

export interface GroupInterface {
    id: string;
    name: string;
    img: string;
    lessons: Lesson[];
}
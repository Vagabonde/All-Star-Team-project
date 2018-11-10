export interface Lesson {
    id: number;
    name: string;
    lectureTitle: string;
    lecturerName: string;
    description: string;
    date: string;
    shortDescription: string;
    materials: Array<Array<string>>;
}

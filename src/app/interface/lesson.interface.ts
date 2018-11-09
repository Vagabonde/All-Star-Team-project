export interface Lesson {
    id: string;
    name: string;
    lectureTitle: string;
    lecturerName: string;
    description: string;
    date: Date;
    shortDescription: string;
    materials: Array<Array<string>>;
}

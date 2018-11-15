export interface Lesson {
    id: string;
    lectureTitle: string;
    lecturerName: string;
    description: string;
    date: string;
    shortDescription: string;
    materials: Array<Array<string>>;
}

export interface Lesson {
    id: string;
    // name: string;
    lectureTitle: string;
    lecturerName: string;
    description: string;
    date: string;
    shortDescription: string;
    materials: Array<Array<string>>;
}

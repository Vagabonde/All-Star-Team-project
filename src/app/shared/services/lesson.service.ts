import { Injectable } from '@angular/core';
import { Lesson } from '../../interface/lesson.interface';
import { LESSONS } from '../mocks/mock-lessons';


@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() { }

  getLessons(): Lesson[] {
    return LESSONS;
  }
}

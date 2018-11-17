import { Injectable } from '@angular/core';
import { Lesson } from '../interface/lesson.interface';
import { LESSONS_FRONT_END } from '../mocks/mock-lessons-front-end';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() { }

  getLessons(): Observable<Lesson[]> {
    return of(LESSONS_FRONT_END);
  }
}

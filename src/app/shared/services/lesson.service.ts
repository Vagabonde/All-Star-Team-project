import { Injectable } from '@angular/core';
import { Lesson } from '../../interface/lesson.interface';
import { LESSONS } from '../mocks/mock-lessons';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() { }

  getLessons(): Observable<Lesson[]> {
    return of(LESSONS);
  }
}

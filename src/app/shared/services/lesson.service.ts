import { Injectable } from '@angular/core';
import { Lesson } from '../../interface/lesson.interface';
import { Observable, of } from 'rxjs';
import {MockService} from "./mock.service";

const key: string = 'lessons';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(public mockService: MockService) { }

  lessons = this.mockService.storage.get(key);

  getLessons(): Observable<Lesson[]> {
    return of(this.lessons);
  }
}

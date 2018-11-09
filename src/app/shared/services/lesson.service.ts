import { Injectable } from '@angular/core';
import { Task } from '../../interface/task';
import { LESSONS } from '../mocks/mock-lessons';


@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() { }

  getLessons(): Task[] {
    return LESSONS;
  }
}

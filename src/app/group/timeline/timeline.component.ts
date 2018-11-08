import { Component, OnInit } from '@angular/core';
import { Task } from '../../interface/task'
import { TASKS } from '../../shared/mocks/mock-tasks'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent implements OnInit {
  tasks = TASKS;
  selectedTask: Task;

  onSelect(currentTask: Task): void {
    if(this.selectedTask === currentTask){
      this.selectedTask = null;
    } else {
      this.selectedTask = currentTask;
    }
  }

  constructor() { }

  ngOnInit() { }
}

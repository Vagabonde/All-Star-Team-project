import { Component, OnInit } from '@angular/core';
import { Task } from './task'
import { TASKS } from './mock-tasks'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent implements OnInit {
  tasks = TASKS;
  selectedTask: Task;
  activeState: boolean = false;


  toggle() {
    this.activeState =!this.activeState;
  }


  onSelect(currentTask: Task, event): void {
    console.log(currentTask);
    console.log(event.target);


    if(this.selectedTask === currentTask){
      this.selectedTask = null;

    } else {
      this.selectedTask = currentTask;
    }
  }

  constructor() { }

  ngOnInit() { }
}

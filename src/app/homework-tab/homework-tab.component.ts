import {Component, OnInit, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../interface/task';
import { TASKS } from '../shared/mocks/mock-tasks';


@Component({
    selector: 'app-homework-tab',
    templateUrl: './homework-tab.component.html',
    styleUrls: ['./homework-tab.component.scss']
})
export class HomeworkTabComponent implements OnInit {
    @Input() selectedTask;

    HWlink: string = '';

    constructor() {}

    ngOnInit() {}

    setLocalStorage() {
        localStorage.setItem('currentHomework', this.HWlink)
        this.HWlink = '';
    }
}

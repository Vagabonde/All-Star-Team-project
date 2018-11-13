import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import  { Task } from '../interface/task';
import { TASKS } from '../shared/mocks/mock-tasks';


@Component({
    selector: 'app-homework-tab',
    templateUrl: './homework-tab.component.html',
    styleUrls: ['./homework-tab.component.scss']
})
export class HomeworkTabComponent implements OnInit {
    @Input() selectedTask;

    public text: string = 'ВСЬО';
    private backgroundColor: string = "#5a95f5";

    HWlink: string = '';

    constructor() {
    }

    ngOnInit() {
    }
    //Replace existing logic with submitHomework method.
    onHomeworkSubmit() {
        localStorage.setItem('currentHomework', this.HWlink);
        this.HWlink = '';
    }

    changeBtnText() {
        if (this.text === 'ВСЬО') {
            this.text = 'АЙ, МОЛОДЕЦЬ!';
            this.backgroundColor = '#00FF7F';
        }
    }
    //Add aditional condities
   public get isEnabledSubmitLessonButton() {
       return true;
   }
}

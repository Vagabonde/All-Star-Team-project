import {Component, OnInit, Input} from '@angular/core';

import {UserService} from "../shared/services/user.service";


@Component({
    selector: 'app-homework-tab',
    templateUrl: './homework-tab.component.html',
    styleUrls: ['./homework-tab.component.scss']
})
export class HomeworkTabComponent implements OnInit {
    @Input() selectedTask;
    public text: string = 'ВСЬО';
    private backgroundColor: string = "#5a95f5";
    private currentStudent: object = {};
    private lessonLink: any = '';

    constructor(private _userService: UserService) {
        this.currentStudent = {};
    }

    ngOnInit() {
    };

    onHomeworkSubmit() {
        this.currentStudent = this._userService.getStudentById('95').subscribe(users => {
            users.lessons.push(this.lessonLink);
            console.log(users);
        })
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

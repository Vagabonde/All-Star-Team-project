import {Component, Input} from '@angular/core';

import {UserService} from '@service/user.service';
import {Homework} from '@interface/homework.interface';
import {User} from '@interface/user';


@Component({
    selector: 'app-homework-tab',
    templateUrl: './homework-tab.component.html',
    styleUrls: ['./homework-tab.component.scss']
})
export class HomeworkTabComponent {
    @Input() selectedTask;
    public text: string = 'ВСЬО';
    private backgroundColor: string = "#5a95f5";
    private currentUser: User;
    private lessonLink: string;
    currentUserId: string = '78vUGlS2S7RywUuqfBw0zPQKxLv2'; //curator Id
    // currentUserId: string = 'xShY1vEeaoRCYNzeBoLw8Ha5yQt2'; //student id;

    constructor(private _userService: UserService) { }

    ngOnInit() {
        this._userService.getUserById(this.currentUserId).subscribe(user => {
            this.currentUser = user});
    }

    ngOnChanges() {
        if (this.currentUser != undefined) {
            for (let lesson of this.currentUser.lessons) {
                if (lesson.lessonId === this.selectedTask.id) {
                    this.lessonLink = lesson.homework.url;
                }
            }
        }
    }

    onHomeworkSubmit() {
        let newHomework: Homework = {
            url: this.lessonLink,
            isSubmitted: true
        };
        this._userService.addUserHomework(this.currentUser.id, newHomework, this.selectedTask);
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

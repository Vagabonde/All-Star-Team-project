import {Component, Input} from '@angular/core';

import {UserService} from '../../shared/services/user.service';
import {Homework} from '../../shared/interface/homework.interface';
import {User} from '../../shared/interface/user';


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

    constructor(private _userService: UserService) {
    }




    ngOnChanges() {
        this._userService.getUserById('128736')
            .subscribe(user => { this.currentUser = user;


        for(let i = 0; i < this.currentUser.lessons.length; i++) {
            if (this.currentUser.lessons[i].lessonId === this.selectedTask.id) {
                if (this.currentUser.lessons[i].homework.url == '') {
                    this.currentUser.lessons[i].homework.url = this.lessonLink;
                } else {
                    this.lessonLink = this.currentUser.lessons[i].homework.url;
                }

            }
        }
    });




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

import {Component, Input} from '@angular/core';

import {UserService} from '@service/user.service';
import {Homework} from '@interface/homework.interface';
import {User} from '@interface/user';
import {AuthService} from '@service/auth.service';


@Component({
    selector: 'app-homework-tab',
    templateUrl: './homework-tab.component.html',
    styleUrls: ['./homework-tab.component.scss']
})
export class HomeworkTabComponent {

    @Input() selectedTask;
    public text: string = 'Submit';
    private backgroundColor: string = "#5a95f5";
    private currentUser: User;
    private lessonLink: string;
    currentUserId: string;




    constructor(private _userService: UserService, private authService: AuthService) {
        this.currentUserId = this.getCurrentUser();
     }

    ngOnInit() {
        this._userService.getUserById(this.currentUserId).subscribe(user => {this.currentUser = user});
    }


    ngOnChanges() {
        if (this.currentUser != undefined) {
            this.lessonLink = '';
            for (let lesson of this.currentUser.lessons) {
                if (lesson.lessonId === this.selectedTask.id) {
                    this.lessonLink = lesson.homework.url;
                }
            }
        }
    }

    getCurrentUser() {
       return this.authService.currentUserId;
    }

    onHomeworkSubmit() {
        let newHomework: Homework = {
            url: this.lessonLink,
            isSubmitted: true
        };
        this._userService.addUserHomework(this.currentUser.id, newHomework, this.selectedTask.id);
    }

    changeBtnText() {
        if (this.text === 'Submit') {
            this.text = 'Done';
            this.backgroundColor = '#00FF7F';
        }
    }

    //Add aditional condities
    public get isEnabledSubmitLessonButton() {
        return true;
    }
}

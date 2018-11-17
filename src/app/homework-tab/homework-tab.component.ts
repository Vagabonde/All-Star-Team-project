import {Component, OnInit, Input} from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {Subscription} from "rxjs/subscription";
import {User} from "../interface/user";


@Component({
    selector: 'app-homework-tab',
    templateUrl: './homework-tab.component.html',
    styleUrls: ['./homework-tab.component.scss']
})
export class HomeworkTabComponent implements OnInit {
    @Input() selectedTask;
    public text: string = 'ВСЬО';
    private backgroundColor: string = "#5a95f5";
    private currentStudent: User;
    private lessonLink: any = '';
    private subscription: Subscription;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.subscription = this.userService.getCurrentUser().subscribe( (student: User) => {
            this.currentStudent = student;
        });
    };

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    onHomeworkSubmit() {
        // this.currentStudent = // методу сабміт хомворк
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

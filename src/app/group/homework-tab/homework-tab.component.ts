import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Subscription } from 'rxjs/subscription';
import { User } from '../../shared/interface/user';

@Component({
    selector: 'app-homework-tab',
    templateUrl: './homework-tab.component.html',
    styleUrls: ['./homework-tab.component.scss']
})
export class HomeworkTabComponent implements OnInit {
    @Input() selectedTask;
    public text: string = 'ВСЬО';
    private backgroundColor: string = "#5a95f5";
    private currentUser: User;
    private subscription: Subscription;
    private newHomework: string = '';

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.subscription = this.userService.getCurrentUser().subscribe((user: User) => {
            this.currentUser = user;
        });
    };

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onHomeworkSubmit() {
        let homework = {
            url: this.newHomework,
            isSubmitted: true
        };
        this.subscription= this.userService.getCurrentUser().subscribe(user => {
            for(let i = 0; i<user.lessons.length; i++){
                if(user.lessons[i].lessonId === this.selectedTask.id){
                    user.lessons[i].homework = homework
                }
            }
        })
    }

    changeBtnText() {
        if (this.text === 'ВСЬО') {
            this.text = 'АЙ, МОЛОДЕЦЬ!';
            this.backgroundColor = '#00FF7F';
        }
    }

    public get isEnabledSubmitLessonButton() {
        return true;
    }
}

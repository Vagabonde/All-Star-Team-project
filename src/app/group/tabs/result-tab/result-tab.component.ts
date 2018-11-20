import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '@service/user.service';
import {User} from '@interface/user';
import {Lesson} from '@interface/lesson.interface';
import {UserLesson} from '@interface/userLesson.interface';

@Component({
  selector: 'app-result-tab',
  templateUrl: './result-tab.component.html',
  styleUrls: ['./result-tab.component.scss']
})
export class ResultTabComponent implements OnInit {


  @Input() selectedTask: Lesson;

  students: User[];
  model: {id: string, name: string, lesson: UserLesson}[]; //model which used in table.  mixed userLessons(without homework) and userName, userId)
  currentGroupId: string;
  curator: User;
  currentUser: User;
  // currentUserId: string = '1993036'; //admin
  currentUserId: string = '128736';//student


  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getCuratorByGroupId(this.currentGroupId)
      .subscribe(curator => this.curator = curator);

    this.userService.getUserById(this.currentUserId)
    .subscribe(user => this.currentUser = user);
  }

  ngOnChanges() {
    this.currentGroupId = this.route.snapshot.paramMap.get('groupId');

    this.userService.getStudentsByGroupId(this.currentGroupId)
    .subscribe(students => {this.students = students; this.fillModel(students)});
  }



  getStudetLessonData(user: User, data: any) {
    let userLessons = user.lessons.filter(user => user.lessonId === this.selectedTask.id)
    if (userLessons.length > 0) {
      return userLessons[0][data];
    } else {
      return '';
    }
  }

  getStudentHomeworkLink(user: User): any {
    let userLessons = user.lessons.filter(user => user.lessonId === this.selectedTask.id);
    if (userLessons.length > 0) {
      return userLessons[0].homework.url;
    } else {
      return '';
    }
  }


  fillModel(students: User[]) {
    let newModel = [];
    let lesson: UserLesson;
    for (let user of students) {
      let existingLessons = user.lessons.filter(el => el.lessonId === this.selectedTask.id);
      if (existingLessons.length > 0) {
        lesson = existingLessons[0]
      } else {
        lesson = {
          lessonId: this.selectedTask.id,
          feedback: '',
          mark: '',
          isAttended: false,
          homework: {
            url: '',
            isSubmitted: false,
          }
        }
      }
      newModel.push({
        name: user.name,
        id: user.id,
        lesson: lesson,
      });
    }
    this.model = newModel;
  }

  saveUserLessons() {
    for (let user of this.model) {
      this.userService.addUserLesson(user.id, user.lesson);
    }
  }
}

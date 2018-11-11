import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GROUPS } from '../../shared/mocks/mock-groups';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../interface/user';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  groups = GROUPS;

  users: User[];
  curator: User;
  students: User[];
  currentGroupId: string;
  currentStudent: User;
  currentStudentId: string = '3495';


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.currentGroupId = this.route.snapshot.paramMap.get('groupId');

    this.userService.getCuratorByGroupId(this.currentGroupId)
    .subscribe(curator => this.curator = curator);


    this.userService.getStudentsByGroupId(this.currentGroupId)
    .subscribe(students => this.students = students);


    this.userService.getStudentById(this.currentStudentId)
    .subscribe(student => this.currentStudent = student);
  }



  // groupExample = {
  //   groupName: 'GROUP NAME JS',
  //   currentStudent: {
  //     name: 'Головач Лєна',
  //     job: 'student',
  //     email: 'petro@gmail.com'
  //   },
  //   partisipants: {
  //     curator: {
  //       name: 'Олег Мельник',
  //       job: 'curator'
  //     },
  //     students: ['Вася Пупкін', 'Попандополо Данило', 'Іво Бобул', 'Олег Винник', 'Бутилка Рома', 'Тупіцина Магдалєна', 'Непийпиво Андрій', 'Срака Степан']
  //   }
  // }


  selected:any;

  select(item) {
    if(this.selected === item) {
    this.selected = '';
    } else {
      this.selected = item;
    }
};

  isActive(item) {
    if(this.selected === item) {
      return 'showed'
    } else {
      return 'hiden'
    }
  }
  isActiveDots(item) {
    if(this.selected === item) {
      return 'active'
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { GROUPS } from '../../mock-groups';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  groups = GROUPS;

  groupExample = {
    groupName: 'GROUP NAME JS',
    currentStudent: {
      name: 'Петрик П’яточкін',
      job: 'student',
      email: 'petro@gmail.com'
    },
    partisipants: {
      curator: {
        name: 'Олег Мельник',
        job: 'curator'
      },
      students: ['Вася Пупкін', 'Попандополо Данило', 'Іво Бобул', 'Олег Винник', 'Бутилка Рома', 'Тупіцина Магдалєна', 'Непийпиво Андрій', 'Срака Степан']
    }
  }

  constructor() {

  }
  sideNavEnabled:boolean = true;

  toggleSideNavState() {
    this.sideNavEnabled = !this.sideNavEnabled;
  }

  ngOnInit() {
  }
  getSideNavState() {
    return {
      'side-nav': this.sideNavEnabled,
      'closed': !this.sideNavEnabled
    };
  }
}

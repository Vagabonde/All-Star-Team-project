import { Component, OnInit } from '@angular/core';
import { GROUPS } from '../../shared/mocks/mock-groups';


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
      name: 'Головач Лєна',
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
  selected:any;


  select(item) {
    if(this.selected === item) {
    this.selected = ''; 
    } else {
      this.selected = item;
    }
};


  ngOnInit() {
  }

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
import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../interface/task";
import {TASKS} from "../shared/mocks/mock-tasks";

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
    @Input() selectedTask;

    constructor() {
    }

    ngOnInit() {
    }

}

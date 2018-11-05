import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../group/timeline/task";
import {TASKS} from "../group/timeline/mock-tasks";

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

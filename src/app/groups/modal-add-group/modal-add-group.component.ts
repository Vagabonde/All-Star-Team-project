import {Component, OnInit} from '@angular/core';
import {GROUPS} from "../../mock-groups";

@Component({
    selector: 'app-modal-add-group',
    templateUrl: './modal-add-group.component.html',
    styleUrls: ['./modal-add-group.component.scss']
})
export class ModalAddGroupComponent implements OnInit {

    inputValue: string = '';

    constructor() {
    }

    ngOnInit() {
    }

    addGroup() {
        GROUPS.push({id: GROUPS[GROUPS.length - 1].id + 1, name: this.inputValue, img: 'default-group.png'});
        this.inputValue = '';
    }
}

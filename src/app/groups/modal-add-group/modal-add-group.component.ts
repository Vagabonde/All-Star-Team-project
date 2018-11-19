import { Component, OnInit } from '@angular/core';
import { GROUPS } from '@shared/mocks/mock-groups';

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
        if (this.inputValue) {
            const id = this.inputValue.replace(/\s/gi, '_').toLocaleLowerCase();
            GROUPS.push({id, name: this.inputValue, img: 'default-group.png', lessons:[]});
            this.inputValue = '';
        }
    }
}

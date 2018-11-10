import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {MockService} from './mock.service';
import {GROUPS} from "./mock-groups";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
    title = 'keep-up-to-date';
    items: Observable<any[]>;
    groups = GROUPS;

    constructor(db: AngularFirestore, public mockService: MockService) {
        this.items = db.collection('items').valueChanges();
    };

    ngOnInit() {
        this.mockService.setUpLocalStorage('groups', this.groups);
    }
}

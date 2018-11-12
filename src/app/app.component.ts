import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {MockService} from './services/mock.service';
import {GROUPS} from './shared/mocks/mock-groups';
import {TASKS} from './shared/mocks/mock-tasks';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'keep-up-to-date';
    items: Observable<any[]>;
    values: Array<object> = [GROUPS, TASKS];
    valuesNames: Array<string> = ['groups', 'tasks'];

    constructor(db: AngularFirestore, public mockService: MockService) {
        this.items = db.collection('items').valueChanges();
    };

    ngOnInit() {
        this.values.forEach((value, index) => this.mockService.setUpLocalStorage(this.valuesNames[index], value));
    }
}

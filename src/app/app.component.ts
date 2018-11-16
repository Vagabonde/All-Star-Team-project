import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {MockService} from './services/mock.service';
import {GROUPS} from './shared/mocks/mock-groups';
import {LESSONS_FRONT_END} from './shared/mocks/mock-lessons-front-end';
import {USERS} from './shared/mocks/mock-user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'keep-up-to-date';
    items: Observable<any[]>;
    values: Array<object> = [{'groups': GROUPS}, {'users': USERS}, {'lessons': LESSONS_FRONT_END}];

    constructor(db: AngularFirestore, public mockService: MockService) {
        this.items = db.collection('items').valueChanges();
    };

    ngOnInit() {
        this.values.forEach((value) => this.mockService.setUpLocalStorage(value));
    }
}

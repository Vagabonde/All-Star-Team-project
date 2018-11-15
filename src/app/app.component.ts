import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {MockService} from './shared/services/mock.service';
import {GROUPS} from './shared/mocks/mock-groups';
import {LESSONS} from './shared/mocks/mock-lessons';
import {USERS} from './shared/mocks/mock-user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'keep-up-to-date';
    items: Observable<any[]>;
    values: Array<object> = [{'groups': GROUPS}, {'users': USERS}, {'lessons': LESSONS}];

    constructor(db: AngularFirestore, public mockService: MockService) {
        this.items = db.collection('items').valueChanges();
    };

    ngOnInit() {
        this.values.forEach((value, index) => this.mockService.setUpLocalStorage(value));
    }
}



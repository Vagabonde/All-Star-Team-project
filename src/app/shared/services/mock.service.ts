import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'angular-webstorage-service';

@Injectable({
    providedIn: "root",
})

export class MockService {

    constructor(@Inject(LOCAL_STORAGE) public storage: StorageService) {
    }

    public setUpLocalStorage(obj): void {
        const key = Object.keys(obj)[0];
        const value = obj[key];
        const currentItems = this.storage.get(key);
        if (!currentItems) {
            this.storage.set(key, value);
        }
    }
}

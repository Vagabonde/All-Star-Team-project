import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'angular-webstorage-service';
import {AppModule} from "./app.module";

@Injectable({
    providedIn: "root",
})

export class MockService {

    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    }

    public setUpLocalStorage(key, value): void {
        const currentItems = this.storage.get(key);
        if (!currentItems) {
            this.storage.set(key, value);
        }
    }
}

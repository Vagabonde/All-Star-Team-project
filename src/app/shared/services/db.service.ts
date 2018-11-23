import {Injectable} from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
} from '@angular/fire/firestore';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DbService {
    collection: AngularFirestoreCollection < any > ;
    items: Observable < any[] > ;
    document: AngularFirestoreDocument < any > ;
    
    constructor(public afs: AngularFirestore) {}

    getData(collectionName: string) {
        return console.log(this.afs.collection(collectionName).get());
    }

    addData(collectionName: string, id: string, data: any) {
        this.collection = this.afs.collection(collectionName);
        this.collection.doc(id).set(data);
        this.items = this.collection.valueChanges()
    }

    deleteData(collectionName: string, id: string) {
        this.document = this.afs.doc(`${collectionName}/${id}`);
        this.document.delete();
    }

    updateData(collectionName: string, id: string, data: any) {
        this.document = this.afs.doc(`${collectionName}/${id}`);
        this.document.update(data);
    }
}

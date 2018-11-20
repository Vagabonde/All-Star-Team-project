import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from '@angular/fire/firestore';
// import { Group } from '../interface/group.interface';
import { Just } from '../interface/just';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FirestoreService {
  collection: AngularFirestoreCollection<Just>;
  items: Observable<Just[]>;
  document: AngularFirestoreDocument<Just>;
  keys: Array<String>;
  // dataName: string = 'users';
  constructor(public afs:AngularFirestore) {
    
    // .map(changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data() as Just;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // });
  }

  getGroups() {
    return console.log(this.afs.collection('groups')); 
  }

  add(name: string, id: string, dataName: Just) {
    this.collection = this.afs.collection(name);
    this.collection.doc(id).set(dataName);
    this.items = this.collection.valueChanges()
  }

  delete(name: string, id: string) {
    this.document = this.afs.doc(`${name}/${id}`);
    this.document.delete();
  }

  update(name: string, id: string, dataName: Just) {
    this.document = this.afs.doc(`${name}/${id}`);
    this.document.update(dataName);
  }
}
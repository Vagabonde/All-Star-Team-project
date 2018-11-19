import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from '@angular/fire/firestore';
import { Group } from '../interface/group.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FirestoreService {
  groupsCollection: AngularFirestoreCollection<Group>;
  groups: Observable<Group[]>;
  groupDoc: AngularFirestoreDocument<Group>;

  constructor(public afs:AngularFirestore) {
    this.groupsCollection = this.afs.collection('groups');
    this.groups = this.groupsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Group;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getGroups() {
    return this.groups; 
  }

  addGroup(group: Group) {
    this.groupsCollection.add(group);
  }

  deleteGroup(group: Group) {
    this.groupDoc = this.afs.doc(`groups/${group.id}`);
    this.groupDoc.delete();
  }

  updateGroup(group: Group) {
    this.groupDoc = this.afs.doc(`groups/${group.id}`);
    this.groupDoc.update(group);
  }
}
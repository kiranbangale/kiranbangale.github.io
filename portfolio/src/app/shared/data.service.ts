import { Injectable } from '@angular/core';

import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

@Injectable()
export class DataService {
  constructor(private db: AngularFireDatabase) {}

  getData(): FirebaseListObservable<any[]> {
    return this.db.list('/data');
  }
}

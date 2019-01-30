import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class DataService {
  constructor(private db: AngularFireDatabase) {}

  getData() {
    return this.db.list('/data').valueChanges();
  }

  storeFeedback(feedback) {
    return this.db.list('/data/feedbacks').push(feedback);
  }

  requestCv(requestCvObj) {
    return this.db.list('/cvRequested').push(requestCvObj);
  }
}
